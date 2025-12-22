"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  setRecruiterMode: (enabled: boolean) => void;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(
  undefined
);

export function RecruiterModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("recruiter-mode");
    if (stored !== null) {
      setIsRecruiterMode(stored === "true");
    }
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("recruiter-mode", String(newValue));
      return newValue;
    });
  };

  const setRecruiterMode = (enabled: boolean) => {
    setIsRecruiterMode(enabled);
    localStorage.setItem("recruiter-mode", String(enabled));
  };

  if (!mounted) {
    return null;
  }

  const value = {
    isRecruiterMode,
    toggleRecruiterMode,
    setRecruiterMode,
  };

  return (
    <RecruiterModeContext.Provider value={value}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);
  if (context === undefined) {
    throw new Error(
      "useRecruiterMode must be used within a RecruiterModeProvider"
    );
  }
  return context;
}
