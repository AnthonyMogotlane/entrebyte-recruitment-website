import express from "express";
import axios from "axios";
import cors from "cors";
import { pool } from "./connection.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env);

const app = express();

app.use(express.json());
app.use(cors());

async function jobsData() {
    const jobs = await axios.get("https://arbeitnow.com/api/job-board-api");
    return jobs.data;
}

app.get("/", async (req, res) => {
    res.json(await jobsData());
})

app.get("/search", async (req, res) => {
    let location = req.query.location;
    let keyword = req.query.keyword;
    
    let jobs = await jobsData();

    if(location == "" && keyword === "") return jobs;

    let filteredJobs = jobs.data.filter((job) => {
        if(location && keyword) return (job.location.toLowerCase().includes(location.toLowerCase()) && job.keyword.toLowerCase().includes(keyword.toLowerCase()));
        if(location) return job.location.toLowerCase().includes(location.toLowerCase());
        if(keyword) return job.description.toLowerCase().includes(keyword.toLowerCase());
    })

    if(filteredJobs.length > 0) {
        return res.status(200).json(filteredJobs);
    } else {
        return res.status(400).json({msg: "Location not found"});
    }
})

app.get("/job", async (req, res) => {
    let slug = req.query.slug;
    
    let jobs = await jobsData();
    let job = jobs.data.find((job) => job.slug === slug);

    if(job) {
        return res.status(200).json(job);
    } else {
        return res.status(400).json({msg: "Job not found"});
    }
})


app.post("/register", (req, res) => {
    const { firstname, lastname, email, password} = req.body;
    const formData = {firstname, lastname, email, lastname};
  
    if (!Object.values(formData).every((v) => v)) {
      return res.json({
        result: "failure",
        message: "Video could not be saved",
      });
    }

    console.log(req.body);
  
    pool.query("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)", [firstname, lastname, email, password])
      .then(() => res.json(req.body))
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
      
  });


const port = process.env.PORT || 3022;
app.listen(port, () => console.log(`listing on port ${port}`)); 