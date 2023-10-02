import express from "express";
import authController from "../controller/auth-controller.js";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();

publicRouter.post("/register", authController.register);
publicRouter.post("/login", authController.login);

publicRouter.get("/users", userController.getAllUsers);
publicRouter.get("/users/:username", userController.getSingleUser);
publicRouter.get("/users/:username/rewards", userController.getUserRewards);

export { publicRouter };
