const userModel = require('../models/model/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');

const singToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIREIN,
  });
};

const createTokenandSent = (user, statusCode, res) => {
  //1) set up cookie
  const cookieOptions = {
    expired: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIREIN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_EVN === 'production') cookieOptions.secure = true;

  //2) asign token and cookie
  const token = singToken(user.id);
  res.cookie('jwt', token, cookieOptions);

  delete user.password; // don't show password

  // 3) sent back token & user info

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // 1) check if emial is exist
  const [isEmailExist] = await userModel.findOne({
    condition: 'users.email',
    field: req.body.email,
  });

  console.log(isEmailExist);

  if (isEmailExist) {
    return next(
      new AppError('Email already exist.Please use another one.', 404)
    );
  }

  //2) Is not Exits Create user
  const [newUser] = await userModel.create(req.body);

  //3) Login Token
  createTokenandSent(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) check if email and password pass
  if (!email || !password) {
    return next(new AppError('Please provided email and password', 401));
  }

  // 2) check if user exist and password correct
  const [user] = await userModel.findOne({
    condition: 'users.email',
    field: req.body.email,
  });

  if (!user || !(await userModel.correctPassword(password, user.password))) {
    return next(
      new AppError('Incorrect email or password.Please Try again!', 401)
    );
  }

  // 3) everthing is ok, sent back a Token
  createTokenandSent(user, 200, res);
});
