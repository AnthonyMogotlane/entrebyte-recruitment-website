import express, { json } from "express";
import jobsData from "../utils/jobs-data.js";

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        let location = req.query.location;
        let keyword = req.query.keyword;

        let jobs = await jobsData();

        if (location == "" && keyword === "") return jobs;

        let filteredJobs = jobs.data.filter((job) => {
            if (location && keyword) return (job.location.toLowerCase().includes(location.toLowerCase()) && job.keyword.toLowerCase().includes(keyword.toLowerCase()));
            if (location) return job.location.toLowerCase().includes(location.toLowerCase());
            if (keyword) return job.description.toLowerCase().includes(keyword.toLowerCase());
        })

        if (filteredJobs.length === 0) {
            return res.status(400).json({ msg: "Location not found" });
        } 

        res.status(200).json(filteredJobs);
    } catch (err) {
        res.status(500).json(err.message);
    }
})

export default router;