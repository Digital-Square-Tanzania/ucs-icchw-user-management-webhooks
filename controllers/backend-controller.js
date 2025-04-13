/**
 * @file backend-controller.js
 * @version 1.0.0
 * @name BackendController
 * @description This file contains the BackendController class which handles requests for the backend service.
 * @autor Kizito Mrema
 */

import BackendService from "../services/backend-service.js";

/**
 * Class representing the backend controller.
 */
class BackendController {
  /**
   * Create a BackendController instance.
   */
  constructor() {
    this.backendService = new BackendService();
  }

  /**
   * Handle update test requests.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   */
  async updateTest(req, res, next) {
    try {
      await this.backendService.updateTest(req, res);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Handle update prod requests.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   */
  async updateProd(req, res, next) {
    try {
      await this.backendService.updateProd(req, res);
    } catch (err) {
      next(err);
    }
  }
}

export default BackendController;
