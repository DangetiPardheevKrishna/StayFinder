import express from "express";
import cors from "cors";
import "dotenv/config";
import http from "http";
import { connectDB } from "./lib/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/userRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 3000;
console.log({ PORT });
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/user", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
server.listen(PORT, () => {
  connectDB();
  console.log(process.env.MONGO_URI);
  console.log("Server is running on port 3000");
});
