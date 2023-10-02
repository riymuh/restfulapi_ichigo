import express from "express";
import { publicRouter } from "../route/public-api.js";
import { authRouter } from "../route/web.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();
web.use(express.json());

web.use("/api", publicRouter);
web.use("/api", authRouter);

web.get("/", (req, res) => {
  res.send("hello world");
});

web.use(errorMiddleware);
