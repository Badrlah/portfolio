import React, { useState } from 'react';
import './darkmode.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also save the user preference to localStorage or cookies here
  };

  return (
    <div className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
