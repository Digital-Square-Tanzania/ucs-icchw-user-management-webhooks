/**
 * @file webhooks-router.js
 * @version 1.0.0
 * @name WebhooksRouter
 * @description This file contains the WebhooksRouter class which handles webhook-specific routes.
 * @autor Kizito Mrema
 */

import BaseRouter from "./base-router.js";
import WebhooksController from "../controllers/webhooks-controller.js";

/**
 * Class representing the webhooks router.
 */
class WebhooksRouter extends BaseRouter {
  /**
   * Create a WebhooksRouter instance.
   */
  constructor() {
    super(WebhooksController);
  }

  /**
   * Initialize the routes for webhooks.
   */
  initializeRoutes() {
    this.router.post("/test", (req, res, next) => this.controller.updateTest(req, res, next));
    this.router.post("/prod", (req, res, next) => this.controller.updateProd(req, res, next));
  }
}

export default WebhooksRouter;
