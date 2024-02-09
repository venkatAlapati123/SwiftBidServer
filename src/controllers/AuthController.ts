import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import { JwtHelper } from "../utils/JwtHelper";
import { CustomRequest } from "../types";
import { generateOtp } from "../utils/commonUtils";
import { EmailConfig } from "../config/EmailConfig";

export class AuthController {
  /**
   * In case of Error
   * return  400 status and json as
   * {
   *   error: "corresponding error message"
   * }
   *
   * In case of Success
   * return  200 status and json as
   * {
   *   token : "newly created JWT token"
   * }
   * @param req
   * @param res
   * @param next
   * @returns
   */
  static async login(req: Request, res: Response, next: NextFunction) {
    //TODO perform all logics here
    return res.json({
      token: JwtHelper.createToken({ id: "testid" }),
    });
  }

  static async forgotPassword(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    if (!req.user)
      return res.status(404).json({
        mesage: "User not Exists.",
      });

    const { email, id } = req.user;
    const otp = generateOtp();
    await EmailConfig.sendEmail(
      email,
      "RESET PASSWORD",
      `OTP to Reset your password in  ${otp}`
    );

    await UserModel.findByIdAndUpdate(id, {
      otp,
    });

    return res.json({
      mesage: "OTP Successfully sent to " + email,
    });
  }
}
