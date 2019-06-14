'use strict';

/**
   * @module 500
   * @param {object} err - err object for request
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc server catch all route handler
   */
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
