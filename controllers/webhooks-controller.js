/**
 * @file webhooks-controller.js
 * @version 1.0.0
 * @name WebhooksController
 * @description This file contains the WebhooksController class which handles requests for the webhooks service.
 * @autor Kizito Mrema
 */

import WebhooksService from "../services/webhooks-service.js";

/**
 * Class representing the webhooks controller.
 */
class WebhooksController {
  /**
   * Create a WebhooksController instance.
   */
  constructor() {
    this.webhooksService = new WebhooksService();
  }

  /**
   * Handle update test requests.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   */
  async updateTest(req, res, next) {
    try {
      await this.webhooksService.updateTest(req, res);
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
      await this.webhooksService.updateProd(req, res);
    } catch (err) {
      next(err);
    }
  }
}

export default WebhooksController;
