import { UserModel } from "../models/user"

export const getUserProfile = async (id: string) => {
  return await UserModel.findById(id)
}
