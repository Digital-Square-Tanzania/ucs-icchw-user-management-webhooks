/**
 * @file ErrorHelper.js
 * @version 1.0.0
 * @name ErrorHelper
 * @description This file contains the ErrorHelper class which provides methods for handling and logging errors.
 * @author [Kizito Mrema]
 */

import winston from "winston";

class ErrorHelper {
  constructor() {
    this.logger = winston.createLogger({
      level: "error",
      format: winston.format.json(),
      defaultMeta: { service: "express-app" },
      transports: [
        new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "./logs/info.log", level: "info" }),
        new winston.transports.Console({ level: "info" }),
      ],
    });
  }

  handleError(err, req, res, next) {
    this.logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    if (!res.headersSent) {
      res.status(err.statusCode || 500).json({ success: false, message: err.message, payload: null });
    } else {
      next(err);
    }
  }
}

export default ErrorHelper;
