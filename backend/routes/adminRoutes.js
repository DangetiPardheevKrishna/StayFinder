import express from "express";
import {
  getAllBookings,
  getHostStats,
  getSalesReport,
} from "../controllers/adminControllers.js";
const adminRoutes = express.Router();
adminRoutes.get("/getHostStats", getHostStats);
adminRoutes.get("/getAllBookings", getAllBookings);
adminRoutes.get("/getSalesReport", getSalesReport);
export default adminRoutes;
