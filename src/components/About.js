// src/About.js

import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className='about'>
            <div className='text-center'>
                <p className='text-secondary fs-5'>Get To know More</p>
                <h1 style={{ fontSize: "50px" }}><strong>About Me</strong></h1>
            </div>
            <div className="row justify-content-around mt-5">
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <img src="mee.jpg" alt="Profile" style={{ maxWidth: '500px', height: 'auto', border: '1px white solid', borderRadius: '30px' }} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-wrap justify-content-around mb-4">
                        <div className="borderr">
                            <img src='mortarboard_114806.png' style={{ width: '50px', height: '50px' }} alt="Education" />
                            <h3>Education</h3>
                            <p>Scientific baccalaureate</p>
                            <p>2021-2022</p>
                        </div>
                        <div className="borderr">
                            <img src='coding_1961602.png' style={{ width: '50px', height: '50px' }} alt="Experience" />
                            <h3>Experience</h3>
                            <p>Diploma technician specialized in digital development</p>
                            <p>2022-2024</p>
                        </div>
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        I am a passionate full stack web developer with a keen interest in creating websites and working in the digital field.
                        I have solid technical skills in various programming languages and frameworks,
                        and a strong foundation in web development.
                    </div>
                </div>
            </div>
        </div>
    )
}
