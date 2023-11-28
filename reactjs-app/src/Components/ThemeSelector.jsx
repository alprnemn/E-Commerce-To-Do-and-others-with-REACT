import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLightbulb  } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'


export default function ThemeSelector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const setTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("darkTheme");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <FontAwesomeIcon
        onClick={setTheme}
        icon={faLightbulb}
        style={{
          position : "absolute",
          top : "10px",
          left : "15px",
          cursor: "pointer",
          fontSize: '21px',
          color: isDarkTheme ? 'bisque' : '#000000c7',
        }}
      />
    </div>
  );
}
