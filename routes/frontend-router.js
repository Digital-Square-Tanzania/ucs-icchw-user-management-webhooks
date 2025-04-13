/**
 * @file frontend-router.js
 * @version 1.0.0
 * @name FrontendRouter
 * @description This file contains the FrontendRouter class which handles frontend-specific routes.
 * @autor Kizito Mrema
 */

import BaseRouter from "./base-router.js";
import FrontendController from "../controllers/frontend-controller.js";

/**
 * Class representing the frontend router.
 */
class FrontendRouter extends BaseRouter {
  /**
   * Create a FrontendRouter instance.
   */
  constructor() {
    super(FrontendController);
  }

  /**
   * Initialize the routes for frontend.
   */
  initializeRoutes() {
    this.router.post("/test", (req, res, next) => this.controller.updateTest(req, res, next));
    this.router.post("/prod", (req, res, next) => this.controller.updateProd(req, res, next));
  }
}

export default FrontendRouter;
