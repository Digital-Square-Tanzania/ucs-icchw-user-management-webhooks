/**
 * @file verify-signature.js
 * @version 1.0.0
 * @name VerifySignature
 * @description This file contains the VerifySignature class which provides methods to verify GitHub webhook signatures.
 * @autor Kizito Mrema
 */

import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

/**
 * Class representing a signature verifier.
 */
class VerifySignature {
  /**
   * Create a VerifySignature instance.
   */
  constructor() {
    this.githubSecret = process.env.GITHUB_SECRET;
  }

  /**
   * Verify the GitHub webhook signature.
   * @param {Object} req - The request object.
   * @returns {boolean} - Returns true if the signature is valid, false otherwise.
   */
  verify(req) {
    const signatureHeader = req.get("X-Hub-Signature-256");
    if (!signatureHeader) {
      console.error("Signature header is missing");
      return false; // Signature header is missing
    }

    const [algorithm, signature] = signatureHeader.split("=");
    if (algorithm !== "sha256") {
      console.error("Unsupported algorithm");
      return false; // Unsupported algorithm
    }

    const expectedSignature = crypto.createHmac("sha256", this.githubSecret).update(JSON.stringify(req.body)).digest("hex");

    // console.log("Expected Signature", expectedSignature);

    return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedSignature, "hex"));
  }
}

export default VerifySignature;
