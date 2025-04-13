/**
 * @file frontend-controller.js
 * @version 1.0.0
 * @name FrontendController
 * @description This file contains the FrontendController class which handles requests for the frontend service.
 * @autor Kizito Mrema
 */

import FrontendService from "../services/frontend-service.js";

/**
 * Class representing the frontend controller.
 */
class FrontendController {
  /**
   * Create a FrontendController instance.
   */
  constructor() {
    this.frontendService = new FrontendService();
  }

  /**
   * Handle update test requests.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   */
  async updateTest(req, res, next) {
    try {
      await this.frontendService.updateTest(req, res);
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
      await this.frontendService.updateProd(req, res);
    } catch (err) {
      next(err);
    }
  }
}

export default FrontendController;
