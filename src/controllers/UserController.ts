import { NextFunction, Response } from "express"
import { CustomRequest, User } from "../types"
import { getUserProfile } from "../services/UserServices"
import { BadRequest } from "../utils/exceptions"

export class UserController {
  /**
   * This is to get profile for loggedIN users
   * This will return user details based on the userId, which was there in token and appended to req object through previous middleware.
   * @param req
   * @param res
   * @param next
   * @returns
   */
  static async getUserProfile(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { userId = "" } = req
      const userDetails = await getUserProfile(userId)
      if (!userDetails) {
        throw new BadRequest("User doesnt Exist")
      }
      const { username, email, mobile, address, province, city, postalcode } = userDetails

      return res.json({ username, email, mobile, address, province, city, postalcode })
    } catch (error) {
      next(error)
    }
  }

  /**
   * This is t get profile for Other users for admin purpose...
   * @param req
   * @param res
   * @param next
   * @returns
   */
  static async getUserProfileFromPath(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const userDetails = await getUserProfile(id)
      if (!userDetails) {
        throw new BadRequest("User doesnt Exist")
      }
      const { username, email, mobile, address, province, city, postalcode } = userDetails

      return res.json({ username, email, mobile, address, province, city, postalcode })
    } catch (error) {
      next(error)
    }
  }
}
