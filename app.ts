import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import employeeRoutes from "./src/routes/employeeRoutes";
import logger from "./src/utils/logger";
require("dotenv").config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://Vinodku4848:Vinod123@cluster0.z6zy1tq.mongodb.net/db"
);

const db = mongoose.connection;
db.on("error", (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});
db.once("open", () => logger.log("Connected to MongoDB"));

app.use(bodyParser.json());

app.use("/api/employee", employeeRoutes);

app.use((err: Error, req: Request, res: Response) => {
  logger.error(`Error: ${err}`);
  res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => {
  logger.log(`Server is running on port ${PORT}`);
});

export default app;
