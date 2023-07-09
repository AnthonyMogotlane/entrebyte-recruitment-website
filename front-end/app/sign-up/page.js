"use client";

import React, { useState } from 'react'
import Link from 'next/link'

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
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

        const postFormData = async () => {
            await fetch("http://localhost:3022/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
        }

        postFormData();

        // Reset form
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className='row justify-content-center mt-5 mx-1'>
            <div className='col-lg-6 card p-3'>
                <h4 className="card-title text-center">Register</h4>
                <form method='post' onSubmit={handleSubmit} >
                    <div className="form-outline mb-4">
                        <input type="text" id="firstname" className="form-control" name='firstname' onChange={handleInputChange} placeholder='First Name' />
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" id="lastname" className="form-control" name='lastname' onChange={handleInputChange} placeholder='Last Name' />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control" name='email' onChange={handleInputChange} placeholder='Email' />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control" name='password' onChange={handleInputChange} placeholder='Password' />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sing Up</button>

                    <div className="text-center">
                        <p>Already have an account? <Link href="/sign-in">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage