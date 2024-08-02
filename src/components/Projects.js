// src/components/Projects.js

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './projects.css';

export default function Projects() {
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
        <p className='text-secondary fs-5'>Browse My recent</p>
        <h1 style={{ fontSize: '50px' }}><strong>Projects</strong></h1>
      </div>
      <div className='row mt-5'>
        <div className='col-12 d-flex justify-content-center'>
          <div className='prj'>
            <img src='image.png' alt='Project' />
            <div className='text-center mt-3'>
              <h1>Fmovies</h1>
              <p>During my training, I developed a film management website using modern technologies. For the FrontEnd, I used React.js and Bootstrap, creating a responsive and friendly user interface. For the backend, I opted for Laravel, a powerful PHP framework, to manage server operations, databases and APIs. This project allowed me to gain solid experience in full stack web development.</p>
              <a className='btn1' href="https://github.com/Badrlah/movie-life" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
