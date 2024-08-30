import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  const calculateSettingAsThemeString = ({ localStorageTheme, systemSettingDark }) => {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
    if (systemSettingDark.matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(calculateSettingAsThemeString({
    localStorageTheme: localStorage.getItem("theme"),
    systemSettingDark
  }));

  const updateThemeOnHtmlEl = ({ theme }) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateThemeOnHtmlEl({ theme: newTheme });
  };

  useEffect(() => {
    updateThemeOnHtmlEl({ theme });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
