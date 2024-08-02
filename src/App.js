import React, { useState, useEffect } from 'react';
import Head from './components/head'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <Head />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowAltCircleUp />
        </ScrollToTopButton>
      )}
    </div>
  );
}

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: black;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: gray;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    right: 15px;
    bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    right: 10px;
    bottom: 20px;
  }
`;

export default App;
