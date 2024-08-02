import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} 
      className="skills"
    >
      <p className="text-center text-secondary fs-5 my-4">Explore My</p>
      <h1 className="text-center my-4" style={{ fontSize:'50px' }}><strong>Skills</strong></h1><br />
      <div className="skills-container">
        <div className="card shadow-sm bg-body-secondary">
          <div className="card-body">
            <h3 className="card-title text-center" style={{ marginTop:'12px' }}>Frontend Development</h3>
            <ul className="list-unstyled">
              <li className="competence d-flex align-items-center">
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>HTML</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px'}}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>CSS</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>Bootstrap</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>JavaScript</strong></h4>
                  <span className='text-secondary'>Intermediate</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>React js</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>Material UI</strong></h4>
                  <span className='text-secondary'>Intermediate</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card shadow-sm bg-body-secondary">
          <div className="card-body">
            <h3 className="card-title text-center" style={{ marginTop:'12px' }}>Backend Development</h3>
            <ul className="list-unstyled skills-list">
              <li className="competence d-flex align-items-center">
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>PHP</strong></h4>
                  <span className='text-secondary'>Intermediate</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px'}}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>Laravel</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>SQL</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>MongoDB</strong></h4>
                  <span className='text-secondary'>Intermediate</span>
                </div>
              </li>
              <li className="competence d-flex align-items-center" style={{ marginTop:'30px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize:'25px', marginRight:'10px' }} />
                <div>
                  <h4><strong>Basic Python</strong></h4>
                  <span className='text-secondary'>Experienced</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
