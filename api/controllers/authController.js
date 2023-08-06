const { promisify } = require('util');
const userModel = require('../models/model/userModel');
const AppError = require('../utils/appError');
const email = require('../utils/email');
const catchAsync = require('../utils/catchAsync');
const userHelperFunctions = require('../models/helpers/userHelperFunctions');
const jwt = require('jsonwebtoken');

const singToken = id => {
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
  delete user.passwordChangeAt; // don't show password

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

  if (isEmailExist) {
    return next(
      new AppError('Email already exist.Please use another one.', 404)
    );
  }

  //2) Is not Exits Create user
  const [newUser] = await userModel.create(req.body);

  const code = userHelperFunctions.generateVerificationCode();
  //3) Send a verCode

  try {
    if (!userHelperFunctions.checkVerificationCodeExpire(newUser.created_at)) {
      return next(
        new AppError(
          'Your verification code Expired.Please Try again or Resent!',
          401
        )
      );
    }
    const options = {
      email: newUser.email,
      subject: 'Your verification code (valid for 10 min)',
      message: `Your verification code (valid for 10 min) ${code}`,
    };
    await email.sendEmail(options);
  } catch (error) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }

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

exports.proctect = catchAsync(async (req, res, next) => {
  // 1) check if token access
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in!.Please log in to get access', 401)
    );
  }

  // 2). verification token or expired
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3). check if still user exist
  const [currentUser] = await userModel.findById(decode.id);

  if (!currentUser) {
    return next(
      new AppError('The user belonging this token does no longer exist!', 401)
    );
  }
  // 4). check if user change after the token was issued
  if (userModel.changePasswordAfter(currentUser.passwordChangeAt, decode.iat)) {
    return next(
      new AppError('User recently changed password!. Please log in again!', 401)
    );
  }

  // GRANT access TO PROCTECT ROUTE
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  // roles ["admin", "instructor"]. role = user
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'You do not have a permission to perform this action!',
          401
        )
      );
    }
    next();
  };
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get the user form the database
  const [user] = await userModel.findById(req.user.id);

  // 2) Check if POSTed current password is
  if (
    !(await userModel.correctPassword(req.body.currentPassword, user.password))
  ) {
    return next(new AppError('Your current password is Wrong', 401));
  }

  // 3) if so, update password
  const change = {
    password: req.body.password,
    passwordChangeAt: Date.now() - 1000,
  };

  await userModel.findByIdandUpdate(user.id, change);

  // 4) log user in,sent JWT
  console.log('✋', user);
  createTokenandSent(user, 201, res);
});
