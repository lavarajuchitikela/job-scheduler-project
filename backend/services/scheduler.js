import cron from "node-cron";
import prisma from "../db.js";

// Runs every minute to check scheduled jobs
cron.schedule("* * * * *", async () => {
  const jobs = await prisma.job.findMany();

  jobs.forEach(job => {
    console.log(`Scheduled Run: ${job.name} → ${job.url}`);
    // In real case: fetch(job.url) or send email etc
  });
});
