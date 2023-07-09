import React from 'react';
import Link from 'next/link';

const JobHeader = ({ jobDetail }) => {
    return (
        <div className="card my-2" style={{ width: "100%" }}>
            <div className="card-body">
                <h3 className='card-title'>{jobDetail.title}</h3>
                <div>
                    <i className="bi bi-briefcase-fill"></i>
                    <p className='d-inline ms-1'>{jobDetail.company_name}</p>
                </div>
                <div className='mb-2'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p className='d-inline ms-1'>{jobDetail.location}</p>
                    {
                        jobDetail.remote === true ? <span className='mx-1 text-secondary'>(remote)</span> : <span className='mx-1 text-secondary'>(on-site)</span>
                    }
                </div>
                <div className='mb-2'>
                    {
                        jobDetail.tags.map(tag => (
                            tag !== "Other" ?
                                <span className='badge bg-secondary me-1 text-light'>{tag}</span> : ""
                        ))
                    }
                    {
                        jobDetail.job_types.map(type => (
                            type !== "other" ?
                                <span className='badge bg-info me-1 text-light'>{type}</span> : ""
                        ))
                    }
                </div>
                <div className='d-flex justify-content-between'>
                    <Link href={jobDetail.url} className="btn btn-primary">Apply Now</Link>
                    <button type="submit" className="btn btn-warning">Save</button>
                </div>
            </div>
        </div>
    )
}

export default JobHeader