import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app.js";
import { AppDataSource } from "./config/data-source.js";

dotenv.config();

const parsedPort = Number(process.env.PORT ?? "5000");
const PORT = Number.isNaN(parsedPort) ? 5000 : parsedPort;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: unknown) => {
    console.error("Error connecting to the database", error);
    process.exit(1);
  });

