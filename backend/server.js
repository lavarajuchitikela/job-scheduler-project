import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs.js";
import "./services/scheduler.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Scheduler Backend Running...");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
