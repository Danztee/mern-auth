import dotenv from "dotenv";
import express from "express";
import { errorhandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.json({ message: "server is ready🚀" });
});

app.use(notFound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
