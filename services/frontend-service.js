/**
 * @file frontend-service.js
 * @version 1.0.0
 * @name FrontendService
 * @description This file contains the FrontendService class which handles frontend update operations.
 * @autor Kizito Mrema
 */

import BaseService from "./base-service.js";

/**
 * Class representing the frontend service.
 */
class FrontendService extends BaseService {
  /**
   * Handle the request to update the test environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the update operation is complete.
   */
  async updateTest(req, res, next) {
    await this.handleUpdate(req, res, next, "FRONTEND_TEST_BRANCH", ["deployTestFrontend"]);
  }

  /**
   * Handle the request to update the production environment.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Promise<void>} - A promise that resolves when the update operation is complete.
   */
  async updateProd(req, res, next) {
    await this.handleUpdate(req, res, next, "FRONTEND_PROD_BRANCH", ["deployProdFrontend"]);
  }
}

export default FrontendService;
