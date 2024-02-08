import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import { JwtHelper } from "../utils/JwtHelper";

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
}
