/**
 * @file server.js
 * @version 1.0.0
 * @name Server
 * @description This file is the entry point for the Express server application. It sets up middleware, routing, and error handling.
 * @autor Kizito Mrema
 */

import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: `.env.local`, override: true });
import bodyParser from "body-parser";

import ErrorHelper from "./helpers/error-helper.js";
import BackendRouter from "./routes/backend-router.js";
import FrontendRouter from "./routes/frontend-router.js";
import WebhooksRouter from "./routes/webhooks-router.js";

/**
 * Class representing the server.
 */
class Server {
  /**
   * Create a Server instance.
   */
  constructor() {
    this.app = express();
    this.port = process.env.NODE_PORT || 3011;
    this.initializeMiddleware();
    this.initializeErrorHandling();
    this.initializeRouteHandling();
  }

  /**
   * Initialize middleware for the Express app.
   */
  initializeMiddleware() {
    this.app.disable("x-powered-by");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  /**
   * Initialize error handling for the Express app.
   */
  initializeErrorHandling() {
    const errorHelperInstance = new ErrorHelper();
    this.app.use((err, req, res, next) => {
      errorHelperInstance.handleError(err, req, res, next);
    });
  }

  /**
   * Initialize route handling for the Express app.
   */
  initializeRouteHandling() {
    const backendRouter = new BackendRouter();
    const frontendRouter = new FrontendRouter();
    const webhooksRouter = new WebhooksRouter();

    this.app.use("/api/v1/webhooks/icchw/backend", backendRouter.getRouter());
    this.app.use("/api/v1/webhooks/icchw/frontend", frontendRouter.getRouter());
    this.app.use("/api/v1/webhooks/icchw/webhooks", webhooksRouter.getRouter());
  }

  /**
   * Start the Express server.
   */
  start() {
    this.app.listen(this.port, () => {
      console.log(`INFO: Service ${process.env.SERVICE_NAME?.toUpperCase()} is listening on ${this.port}`);
    });
  }
}

export default Server;

const server = new Server();
server.start();
