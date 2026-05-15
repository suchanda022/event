import express, { type Request, type Response } from "express";
import cors from "cors";

import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("backend server running");
});

export default app;
