
import React, { useState } from 'react';
import { RiToggleFill, RiToggleLine } from 'react-icons/ri'; 

import './ThemeChange.css';

const ThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <span className='theme-toggle' onClick={toggleTheme}>
      {isDarkTheme ? <RiToggleLine size={32} /> : <RiToggleFill size={32} />}
    </span>
  );
};

export default ThemeToggle;
