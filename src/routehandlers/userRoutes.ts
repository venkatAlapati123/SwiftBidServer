import express from "express"
import { isUserAdmin, validateToken } from "../middlewares/authMiddlewares"
import { UserController } from "../controllers/UserController"

const router = express.Router()

router.get("/profile", validateToken, UserController.getUserProfile)
router.get("/profile/:id", validateToken, isUserAdmin, UserController.getUserProfileFromPath)

export const userRoutes = router
