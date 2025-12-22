"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "anime" | "manga" | "recruiter" | "cyber";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function MultiThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("portfolio-theme") as Theme;
    if (stored && ["light", "dark", "anime", "manga", "recruiter", "cyber"].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("light", "dark", "anime", "manga", "recruiter", "cyber");
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useMultiTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useMultiTheme must be used within a MultiThemeProvider");
  }
  return context;
}
