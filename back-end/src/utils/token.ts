import jwt from "jsonwebtoken";

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Missing required environment variable: JWT_SECRET");
  }
  return secret;
};

export const generateToken = (adminId: number): string => {
  return jwt.sign({ id: adminId }, getJwtSecret(), {
    expiresIn: "1d",
  });
};
