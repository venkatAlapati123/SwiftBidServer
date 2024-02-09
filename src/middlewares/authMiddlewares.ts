import { NextFunction, Request, Response } from "express";
import { CustomRequest, ForgotPasswordType, User } from "../types";
import { UserModel } from "../models/user";

export const isUserEmailExists = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const { email } = body as ForgotPasswordType;

  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    return res.status(404).json({
      message: "Email not available in system",
    });
  }

  req.user = existingUser as User;
  next();
};
