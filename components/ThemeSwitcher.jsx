"use client";
import { useTheme } from "@node_modules/next-themes/dist";
import { useEffect, useState } from "react";

import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeSwitcher;
