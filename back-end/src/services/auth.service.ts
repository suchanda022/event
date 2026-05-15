import bcrypt from "bcryptjs";
import { type Admin } from "../entities/admin.js";
import {
  createAdmin,
  findAdminByEmail,
} from "../repositories/admin.repo.js";
import { generateToken } from "../utils/token.js";

export async function registerAdmin(data: Partial<Admin>) {
  const existingAdmin = await findAdminByEmail(data.email ?? "");

  if (existingAdmin) {
    throw new Error("Admin already exists");
  }

  if (!data.name || !data.email || !data.password) {
    throw new Error("name, email and password are required");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const savedAdmin = await createAdmin({
    ...data,
    password: hashedPassword,
  });

  return {
    admin: savedAdmin,
    token: generateToken(savedAdmin.id),
  };
}

export async function loginAdmin(email: string, password: string) {
  const admin = await findAdminByEmail(email);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatched = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  return {
    admin,
    token: generateToken(admin.id),
  };
}
