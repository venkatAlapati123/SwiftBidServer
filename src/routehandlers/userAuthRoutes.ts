import express from 'express'
import { AuthController } from '../controllers/AuthController';
import { isUserEmailExists } from '../middlewares/authMiddlewares';

const router = express.Router()

router.post("/login", AuthController.login)

router.post("/signup",AuthController.signup)

router.post("/forgotpassword", isUserEmailExists, AuthController.forgotPassword)
router.post("/resetpassword",AuthController.resetPassword)

export const userAuthRoutes = router;
