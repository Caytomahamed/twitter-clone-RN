const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

/**
 * Controller: add new record
 * @exports
 *
 * @param {object} Model - This IS represents the data and the business logic of the application
 * @returns {object} the new record
 */
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const [doc] = Model.create(req.body);
    console.log(doc);

    if (!doc) {
      return next(
        new AppError(
          "You can't create this document some thing wrong.Please add all requirement",
          404
        )
      );
    }

    res.statu(201).json({
      statu: 'success',
      data: {
        data: doc,
      },
    });
  });

/**
 * Controller: get a record
 * @exports
 *
 * @param {object} Model - This IS represents the data and the business logic of the application
 * @returns {object} the new record
 */
exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const [doc] = Model.findById(+req.params.id);

    if (!doc) {
      return next(new AppError('No document found with this ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // 1) get all doc
    let doc = await Model.findAll();
    console.log('handle');

    if (!doc.length) {
      return next(new AppError('OH! No document found.Please try again', 404));
    }

    // 2) Sent back
    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: {
        data: doc,
      },
    });
  });
