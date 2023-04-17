/**
 * Util: is custom error handler.
 *
 * @param {string} message - description what happend.
 * @param {Number} id - HTTP status code .
 * @create {object} the record.
 */
class appError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructo);
  }
}

module.exports = appError;
