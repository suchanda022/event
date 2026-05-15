import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Admin } from "../entities/admin.js";
import { Inquiry } from "../entities/inquiry.js";


dotenv.config();

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const dbPort = Number(getRequiredEnv("DB_PORT"));
if (Number.isNaN(dbPort)) {
  throw new Error("DB_PORT must be a valid number");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: getRequiredEnv("DB_HOST"),
  port: dbPort,
  username: getRequiredEnv("DB_USERNAME"),
  password: getRequiredEnv("DB_PASSWORD"),
  database: getRequiredEnv("DB_NAME"),
  synchronize: true,
  logging: false,
  entities: [Admin,Inquiry],
  migrations: [],
  subscribers: [],
});
