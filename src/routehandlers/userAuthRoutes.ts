import express from 'express'
import { AuthController } from '../controllers/AuthController';
import { isUserEmailExists } from '../middlewares/authMiddlewares';

const router = express.Router()

router.post("/login", AuthController.login)

router.post("/forgotpassword", isUserEmailExists, AuthController.forgotPassword)

export const userAuthRoutes = router;
