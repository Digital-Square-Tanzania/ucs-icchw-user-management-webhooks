/**
 * @file backend-router.js
 * @version 1.0.0
 * @name BackendRouter
 * @description This file contains the BackendRouter class which handles backend-specific routes.
 * @autor Kizito Mrema
 */

import BaseRouter from "./base-router.js";
import BackendController from "../controllers/backend-controller.js";

/**
 * Class representing the backend router.
 */
class BackendRouter extends BaseRouter {
  /**
   * Create a BackendRouter instance.
   */
  constructor() {
    super(BackendController);
  }

  /**
   * Initialize the routes for backend.
   */
  initializeRoutes() {
    this.router.post("/test", (req, res, next) => this.controller.updateTest(req, res, next));
    this.router.post("/prod", (req, res, next) => this.controller.updateProd(req, res, next));
  }
}

export default BackendRouter;
