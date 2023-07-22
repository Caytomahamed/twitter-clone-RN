const userModel = require('../models/model/userModel');
const factory = require('../controllers/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');


const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1.create error if user pass a password
  if (req.body.password) {
    return next(
      new appError(
        'This route is not for password update.Please use /updateMyPassword',
        400
      )
    );
  }

  // 2. filtered unwanted field that we are not allowed to update
  const filteredBody = filterObj(
    req.body,
    'username',
    'name',
    'email',
    'profilePicture',
    'bio'
  );

  //2. update user
//   const [updateUser] = await userModel.
});
exports.getAllusers = factory.getAll(userModel);
