import React from 'react';
export default function Head() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="nav-link text-center m-4" style={{ fontFamily: "Poppins, sans-serif", fontSize: '36px' }}>BadrEddine</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-underline ms-auto">
            <li className="nav-item m-3 fs-5">
              <a className="nav-link text-dark" href="#home">Home</a>
            </li>
            <li className="nav-item m-3 fs-5">
              <a className="nav-link text-dark" href="#about">About</a>
            </li>
            <li className="nav-item m-3 fs-5">
              <a className="nav-link text-dark" href="#skills">Skills</a>
            </li>
            <li className="nav-item m-3 fs-5">
              <a className="nav-link text-dark" href="#projects">Projects</a>
            </li>
            <li className="nav-item m-3 fs-5">
              <a className="nav-link text-dark" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
