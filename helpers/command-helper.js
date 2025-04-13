/**
 * @file spawn-command.js
 * @version 1.0.0
 * @name SpawnCommand
 * @description This file contains the SpawnCommand class which provides methods to execute shell commands and handle their output and errors.
 * @author Kizito Mrema
 */

import { spawn } from "child_process";

import ErrorHelper from "./error-helper.js";
import ResponseHelper from "./response-helper.js";

/**
 * Class representing a command executor.
 */
class SpawnCommand {
  /**
   * Create a SpawnCommand instance.
   */
  constructor() {
    this.errorHelper = new ErrorHelper();
  }

  /**
   * Run a command with the specified arguments and working directory.
   * @param {string} command - The command to run.
   * @param {Array<string>} args - The list of string arguments.
   * @param {string} cwd - The current working directory of the child process.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   */
  run(command, args, cwd, req, res, next) {
    const process = spawn(command, args, { cwd, shell: true });

    res.setHeader("Content-Type", "text/plain");

    /**
     * Event listener for process standard output (stdout) data.
     * Logs and writes the stdout data to the response.
     * @param {Buffer} data - The data from stdout.
     */
    process.stdout.on("data", (data) => {
      const message = data.toString();
      console.log(message);
      res.write(message);
    });

    /**
     * Event listener for process standard error (stderr) data.
     * Logs and writes the stderr data to the response.
     * @param {Buffer} data - The data from stderr.
     */
    process.stderr.on("data", (data) => {
      const message = data.toString();
      console.error(message);
      res.write(message);
    });

    /**
     * Event listener for process error events.
     * Logs the error and writes it to the response, then handles the error using ErrorHelper.
     * @param {Error} err - The error object.
     */
    process.on("error", (err) => {
      const errorMessage = `Error during ${command} execution: ${err.message}\n`;
      console.error(errorMessage);
      res.write(errorMessage);
      res.end();

      this.errorHelper.handleError(err, req, res, next);
    });

    /**
     * Event listener for process close events.
     * Logs and writes the process exit code to the response.
     * @param {number} code - The exit code of the process.
     */
    process.on("close", (code) => {
      const closeMessage = `\n${command} exited with code ${code}`;
      console.log(closeMessage);
      res.write(closeMessage);
      res.end();
    });

    /**
     * Event listener for process exit events.
     * Ensures the response is properly ended if not already done.
     */
    process.on("exit", () => {
      if (!res.writableEnded) {
        ResponseHelper.api(req, res, 200, true, `${command} process completed`, null);
      }
    });
  }
}

export default SpawnCommand;
