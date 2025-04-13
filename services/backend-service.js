/**
 * @file backend-service.js
 * @version 1.0.0
 * @name BackendService
 * @description This file contains the BackendService class which handles backend update operations.
 * @autor Kizito Mrema
 */

import BaseService from "./base-service.js";

/**
 * Class representing the backend service.
 */
class BackendService extends BaseService {
  /**
   * Handle the request to update the test environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the update operation is complete.
   */
  async updateTest(req, res, next) {
    await this.handleUpdate(req, res, next, "BACKEND_TEST_BRANCH", ["deployTestBackend"]);
  }

  /**
   * Handle the request to update the production environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the update operation is complete.
   */
  async updateProd(req, res, next) {
    await this.handleUpdate(req, res, next, "BACKEND_PROD_BRANCH", ["deployProdBackend"]);
  }
}

export default BackendService;
