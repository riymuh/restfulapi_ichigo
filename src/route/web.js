import express from "express";
import authController from "../controller/auth-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const authRouter = new express.Router();

authRouter.use(authMiddleware);

authRouter.delete("/logout", authController.logout);

export { authRouter };
