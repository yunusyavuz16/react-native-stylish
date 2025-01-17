// theme/ThemeContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import type { Theme, ThemeContextType } from "../types";


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

 const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = Appearance.getColorScheme() || "light";
  const [theme, setTheme] = useState<Theme>(colorScheme);

  useEffect(() => {
    const loadTheme = async () => {
      // getItem from a persisted store that does not get cleared instead of defining directly savedTheme
      let savedTheme = "light";
      if (savedTheme) {
        setTheme(savedTheme as Theme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // setItem to a persisted store that does not get cleared
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export {ThemeProvider};
