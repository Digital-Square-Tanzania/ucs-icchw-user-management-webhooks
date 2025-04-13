/**
 * @file base-router.js
 * @version 1.0.0
 * @name BaseRouter
 * @description This file contains the BaseRouter class which provides common methods for initializing routes.
 * @autor Kizito Mrema
 */

import { Router } from "express";

/**
 * Class representing the base router.
 */
class BaseRouter {
  /**
   * Create a BaseRouter instance.
   * @param {Object} Controller - The controller class to handle the routes.
   */
  constructor(Controller) {
    this.router = Router();
    this.controller = new Controller();
    this.initializeRoutes();
  }

  /**
   * Initialize the routes.
   * This method should be overridden by subclasses to define specific routes.
   */
  initializeRoutes() {
    throw new Error("initializeRoutes method must be implemented by subclasses");
  }

  /**
   * Get the router instance.
   * @returns {Object} - The router instance.
   */
  getRouter() {
    return this.router;
  }
}

export default BaseRouter;
