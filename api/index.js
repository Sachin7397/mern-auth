import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

//password contains @ so %40 is hex code

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();

app.listen(3000, () => {
  console.log("Sever listening on port 3000!");
});

app.use("/api/user", userRoutes);
