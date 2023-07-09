"use client"
import React, { useEffect } from 'react'
import jobsData from '../../jobsData'
import JobHeader from '../../components/JobHeader'
import JobDesc from '../../components/JobDesc'

async function job(slug) {
  const res = await fetch(`http://localhost:3022/job?slug=${slug}`);
  const jobData = await res.json();
  return jobData;
}

const JobDetailsPage = async ({ params }) => {

  const jobDetail = await job(params.slug);

  return (
    <div>
      <JobHeader jobDetail={jobDetail} />
      <JobDesc desc={jobDetail.description} />
    </div>
  )
}

export default JobDetailsPage;