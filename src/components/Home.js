import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';


function Home() {
  const text='BadrEddine Lahlaissi';
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }} className="container" style={{ marginTop:'-30px' }}>
      <div className="row justify-content-between align-items-center vh-100">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="mee.jpg" alt="John Doe" className="profile-img" />
        </div>
        <div className="col-12 col-md-6 profile-card text-center text-md-center">
          <p>Hello, I'm</p>
          <motion.div
             className="animated-text"
             variants={containerVariants}
             initial="hidden"
             animate="visible"
            style={{ display: 'flex', fontSize: '2.8rem' ,fontWeight:'bold'  , whiteSpace:'nowrap'}}
          >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={childVariants}>
                        {letter}
                </motion.span>
             ))}
          </motion.div>
          <h2>Fullstack Developer</h2>
          <div>
            <a className="btn btn-outline-dark p-2" href="/Lahlaissi_Badreddine.pdf" target="_blank" 
              rel="noopener noreferrer" >Download CV</a>
            <button className="btn btn-dark">Contact Info</button>
          </div>
          <div className="social-icons mt-3">
            <a href="https://www.linkedin.com/in/badreddine-lahlaissi-9157952a3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Badrlah" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
