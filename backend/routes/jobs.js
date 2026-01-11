import express from "express";
import {
  createJob,
  getAllJobs,
  runJobNow
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getAllJobs);
router.post("/run/:id", runJobNow);

export default router;
