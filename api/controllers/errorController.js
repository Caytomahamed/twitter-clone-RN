const sendErrorDev = function (err, res) {
  console.log('error 🖐', err);
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'something went very wrong!😥',
    });
  }
};

module.exports = function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if ((process.env.NODE_ENV = 'development')) {
    sendErrorDev(err, res);
  } else if ((process.env.NODE_ENV = 'production')) {
    sendErrorProd(err, res);
  }
};
