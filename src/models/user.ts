import mongoose from "mongoose";

var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: 'regular'
  },
  password: {
    type: String,
    required: true,
  },
  province: {
    type: String,
  },
  City: {
    type: String,
  },
  postalcode: {
    type: String,
  },
  country: {
    type: String,
  },
  otp: {
    type: String,
  },
});

export const UserModel = mongoose.model("swiftbiduser", userSchema);
