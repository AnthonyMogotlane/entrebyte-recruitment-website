"use client"

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Reset form
        setFormData({
            email: "",
            password: ""
        })
    }

    return (
        <div className='row justify-content-center mt-5 mx-1'>
            <div className='col-lg-6 card p-3'>
                <h4 className="card-title text-center">Login</h4>
                <form onSubmit={handleSubmit} >
                    <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control" name='email' onChange={handleInputChange} placeholder='Email' />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control" name='password' onChange={handleInputChange} placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Don't have account? <Link href="/sign-up">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;