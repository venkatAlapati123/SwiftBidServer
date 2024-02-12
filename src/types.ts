import { Request } from "express"

export interface User {
    id: string;
    username?: string;
    email: string;
    mobile: string;
    address: string;
    role: string;
    password: string;
    province: string;
    City: string;
    postalcode: string;
    country: string;
    otp: string;
  }
export interface CustomRequest extends Request {
    user?: User
}

export interface ForgotPasswordType {
    email: string
}

export interface LoginRequest {
    email: string
    password: string
}

export interface SignUpRequest {
    username: string
    email: string
    password: string
}