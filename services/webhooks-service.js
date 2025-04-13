/**
 * @file webhooks-service.js
 * @version 1.0.0
 * @name WebhooksService
 * @description This file contains the WebhooksService class which handles webhook operations.
 * @autor Kizito Mrema
 */

import BaseService from "./base-service.js";

/**
 * Class representing the webhooks service.
 */
class WebhooksService extends BaseService {
  /**
   * Handle the request to process a webhook event for the test environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the webhook processing is complete.
   */
  async updateTest(req, res, next) {
    await this.handleUpdate(req, res, next, "WEBHOOKS_TEST_BRANCH", ["deployTestWebhooks"]);
  }

  /**
   * Handle the request to process a webhook event for the production environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the webhook processing is complete.
   */
  async updateProd(req, res, next) {
    await this.handleUpdate(req, res, next, "WEBHOOKS_PROD_BRANCH", ["deployProdWebhooks"]);
  }
}

export default WebhooksService;
