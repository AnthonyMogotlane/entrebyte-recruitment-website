
"use client";

import { useState, useEffect } from 'react';

import Jobs from './components/Jobs';
import LoadingPage from './loading';
import SearchBox from './components/SearchBox';

const HomePage = async () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('http://localhost:3022');
      const data = await res.json();
      console.log(data.data);
      setJobs(data.data);
      setLoading(false);
    };
    fetchJobs();
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      < SearchBox getJobResults={(result) => setJobs(result)} />

      {
        jobs.length > 0 ?
          <div className='px-2'>
            <p>{jobs.length} Jobs Available</p>
            <Jobs jobs={jobs} />
          </div> :
          <div className='card p-3'>
            <h5>Your search did not match any jobs.</h5>
            <p>Search suggestions:</p>
            <ul>
              <li>Try more general keywords</li>
              <li>Check your spelling</li>
            </ul>
          </div>
      }
    </div>
  )
}

export default HomePage