import Link from 'next/link'
import React from 'react'
import createMarkup from '../createMarkup'

const Jobs = ({ jobs }) => {
    console.log(jobs.description)

    return (
        <div>
            {
                jobs.map((job, i) => (
                    <Link key={i} className='deco-none' href={`/job/${job.slug}`} target='_blank' >
                        <div className="card mb-2" style={{ width: "100%" }}>
                            <div className="card-body">
                                <h5 className="card-title">{job.title}</h5>
                                <div>
                                    <i className="bi bi-briefcase-fill"></i>
                                    <p className='d-inline ms-1'>{job.company_name}</p>
                                </div>
                                <div className='mb-2'>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <p className='d-inline ms-1'>{job.location}</p>
                                    {
                                        job.remote === true ? <span className='mx-1 text-secondary'>(remote)</span> : <span className='mx-1 text-secondary'>(on-site)</span>
                                    }
                                </div>
                                <div className='mb-2'>
                                    {
                                        job.tags.map(tag => (
                                            tag !== "Other" ?
                                                <span className='badge bg-secondary me-1 text-light'>{tag}</span> : ""
                                        ))
                                    }
                                    {
                                        job.job_types.map(type => (
                                            type !== "other" ?
                                                <span className='badge bg-info me-1 text-light'>{type}</span> : ""
                                        ))
                                    }
                                </div>
                                <Link className="btn btn-primary" href={`/job/${job.slug}`} target='_blank' >View Post</Link>
                            </div>

                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Jobs