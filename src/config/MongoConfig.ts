import mongoose, { Connection } from "mongoose"

export class MongoClient {
  static async initialize(): Promise<boolean> {
    const url = process.env.MONGO_URL || ""
    if (!url) {
      throw new Error("Invalid connection URL")
    }
    await mongoose.connect(url)
    console.log(`Connected to MOngoDb successfulyy...`)
    return true
  }
}

export default MongoClient
