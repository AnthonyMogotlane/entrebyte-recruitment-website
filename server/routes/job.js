
import express, { json } from "express";
import jobsData from "../utils/jobs-data.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let slug = req.query.slug;

        let jobs = await jobsData();
        let job = jobs.data.find((job) => job.slug === slug);

        if (!job) {
            res.status(400).json({ msg: "Job not found" });
        }

        res.status(200).json(job);
    } catch (err) {
        res.status(500).json(err.message);
    }

})

export default router;