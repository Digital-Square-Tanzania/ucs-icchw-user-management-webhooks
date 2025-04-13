/**
 * @file base-service.js
 * @version 1.0.0
 * @name BaseService
 * @description This file contains the BaseService class which provides common methods to handle update operations for both frontend and backend services, including signature verification and command execution.
 * @autor Kizito Mrema
 */

import ErrorHelper from "../helpers/error-helper.js";
import ResponseHelper from "../helpers/response-helper.js";
import VerifySignature from "../helpers/signature-helper.js";
import SpawnCommand from "../helpers/command-helper.js";

/**
 * Class representing the base service.
 */
class BaseService {
  /**
   * Create a BaseService instance.
   */
  constructor() {
    this.errorHelper = new ErrorHelper();
    this.responseHelper = new ResponseHelper();
    this.verifySignature = new VerifySignature();
    this.spawnCommand = new SpawnCommand();
  }

  /**
   * Handle the request to update the environment.
   * Verifies the GitHub webhook signature and triggers the appropriate command if valid.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @param {string} branchEnvVar - The environment variable for the target branch.
   * @param {Array} commandArgs - The arguments for the command to run.
   * @returns {Promise<void>} - A promise that resolves when the update operation is complete.
   */
  async handleUpdate(req, res, next, branchEnvVar, commandArgs) {
    try {
      if (!this.verifySignature.verify(req)) {
        return ResponseHelper.api(req, res, 401, false, "Unauthorized", null);
      }

      const event = req.get("X-GitHub-Event");
      if (event === "push" && req.body.ref === `refs/heads/${process.env[branchEnvVar]}`) {
        this.spawnCommand.run("make", commandArgs, ".", req, res, next);
      } else {
        ResponseHelper.api(req, res, 200, true, "Ignoring non-push or non-target branch event.", null);
      }
    } catch (err) {
      this.errorHelper.handleError(err, req, res, next);
    }
  }
}

export default BaseService;
