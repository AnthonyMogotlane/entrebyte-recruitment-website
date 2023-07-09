import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const jobsData = async() => {
    const jobs = await axios.get(process.env.JOBS_API);
    return jobs.data;
}

export default jobsData;