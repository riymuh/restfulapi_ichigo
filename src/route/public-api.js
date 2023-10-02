import express from "express";
import authController from "../controller/auth-controller.js";

const publicRouter = new express.Router();
publicRouter.post("/register", authController.register);
publicRouter.post("/login", authController.login);

export { publicRouter };
