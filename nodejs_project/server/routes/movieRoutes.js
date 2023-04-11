import express from "express";
import { predict } from "../controllers/movieController.js";

const router = express.Router();
router.post("/",predict);

export default router;