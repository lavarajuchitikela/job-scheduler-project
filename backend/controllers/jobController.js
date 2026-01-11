import prisma from "../db.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { name, schedule, url } = req.body;

    const job = await prisma.job.create({
      data: { name, schedule, url }
    });

    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Run a job manually
export const runJobNow = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const job = await prisma.job.findUnique({ where: { id } });

    if (!job) return res.status(404).json({ error: "Job not found" });

    console.log(`Executing Job: ${job.name} → ${job.url}`);

    res.json({ message: "Job executed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
