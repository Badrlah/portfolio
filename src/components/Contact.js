// src/Contact.js

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
            className='container'
        >
            <div className='text-center'>
                <p className='text-secondary fs-5'>Get in Touch</p>
                <h1 style={{ fontSize: "50px" }}><strong>Contact Me</strong></h1>
            </div>
            <div className="contact-info">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="mailto:badr20052005fc@gmail.com">badr20052005fc@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    <a href="https://www.linkedin.com/in/badreddine-lahlaissi-9157952a3">LinkedIn</a>
                </div> 
            </div>
           <p className='text-center'>Copyright © 2024 BadrEddine Lahlaissi. All Rights Reserved.</p>
        </motion.div>
    );
}
