"use client";

import { useLayoutEffect, useState } from "react";
import HumeLogo from "./logos/Hume";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from '@/package.json';

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
  <rect y="5.45459" width="3.33333" height="9.09091" rx="1.66667" fill="currentColor"/>
  <rect x="26.6666" y="5.45459" width="3.33333" height="9.09091" rx="1.66667" fill="currentColor"/>
  <rect x="6.66675" y="3.63635" width="3.33333" height="12.7273" rx="1.66667" fill="currentColor"/>
  <rect x="20" y="3.63635" width="3.33333" height="14.5455" rx="1.66667" fill="currentColor"/>
  <rect x="13.3334" width="3.33333" height="21.8182" rx="1.66667" fill="currentColor"/>
</svg>

      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
