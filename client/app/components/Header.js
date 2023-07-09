
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <div>
                        <Image src="/logo.png" alt="logo" width="100" height="50" />
                        <Link className="navbar-brand italic text-light" href="/">Recruitment</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item text-white">
                                <Link className='nav-link text-light' href="/">Find Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-light' href="/my-jobs">My Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-light' href="https://entrebyte.co.za/about/" target='_blank' >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='btn btn-light text-primary' href="/sign-in">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header