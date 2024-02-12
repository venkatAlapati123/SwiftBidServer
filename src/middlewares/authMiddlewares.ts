import { NextFunction, Request, Response } from "express";
import { CustomRequest, ForgotPasswordType, User } from "../types";
import { UserModel } from "../models/user";
import { BadRequest, NotFound } from "../utils/exceptions";

export const isUserEmailExists = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const { email } = body as ForgotPasswordType;

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      console.error("Email not available in system");
      throw new BadRequest("Email not available in system");
    }

    req.user = existingUser as User;
    next();
  } catch (error) {
    next(error); 
  }
};