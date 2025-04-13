/**
 * @file ResponseHelper.js
 * @version 1.0.0
 * @name ResponseHelper
 * @description ResponseHelper class for returning API responses.
 * @author [Kizito Mrema]
 */

class ResponseHelper {
  constructor() {}

  static async api(req, res, status, success, message, payload) {
    res.status(status || 200).json({
      success: success, // Boolean
      request: req.path,
      message: message, // Just a title
      payload: payload || null,
    });
  }
}

export default ResponseHelper;
