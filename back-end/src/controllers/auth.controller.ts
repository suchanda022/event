import { type Request, type Response } from "express";
import { loginAdmin, registerAdmin } from "../services/auth.service.js";

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "Unexpected error";
};

export async function register(req: Request, res: Response) {
  try {
    const result = await registerAdmin(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: getErrorMessage(error),
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "email and password are required",
      });
      return;
    }

    const result = await loginAdmin(email, password);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: getErrorMessage(error),
    });
  }
}
