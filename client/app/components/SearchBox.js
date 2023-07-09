"use client";

import React from 'react'
import { useState } from 'react'

const SearchBox = ({ getJobResults }) => {

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(keyword);
        console.log(location);

        const res = await fetch(`http://localhost:3022/search?location=${location}&keyword=${keyword}`);
        const jobs = await res.json();

        getJobResults(jobs);
    }

    return (
        <div className='py-4'>
            <form onSubmit={handleSubmit} >
                <div className='d-lg-flex justify-content-center'>
                    <div className="mb-1 w-100">
                        <input type="text" className="form-control" placeholder="Search job title or keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                    </div>
                    <div className="mb-1 ms-lg-1 w-100">
                        <input type="text" className="form-control" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className='w-25 ms-lg-1'>
                        <button type="submit" className="btn btn-primary w-100">Find Jobs</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBox