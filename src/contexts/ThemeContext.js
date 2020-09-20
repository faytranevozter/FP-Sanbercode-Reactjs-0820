import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setThemex] = useState(null);

  const setTheme = (value) => {
    localStorage.setItem('theme', value);
    setThemex(value);
  };
  
  useEffect(() => {
    if (theme === null) {
      let themeLS = localStorage.getItem('theme');
      if (themeLS === null) {
        themeLS = JSON.stringify({
          color: 'dark',
          sidebarCollapse: false,
        });
      }
      setThemex(JSON.parse(themeLS));
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
};
