import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobsData from "./utils/jobs-data.js";

import search from "./routes/search.js";
import job from "./routes/job.js";
import register from "./routes/register.js";
import login from "./routes/login.js";
import verify from "./routes/verify.js";
import myJobs from "./routes/my-jobs.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.json(await jobsData());
})

// Routes
app.use("/search", search);
app.use("/job", job);
app.use("/register", register);
app.use("/login", login);
app.use("/verify", verify);
app.use("/my-jobs", myJobs);

const port = process.env.PORT || 3022;
app.listen(port, () => console.log(`listing on port ${port}`));