import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-blue-100
        bg-[#f2f8ff]
        shadow-sm
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-blue-300
        hover:shadow-md

        dark:border-white/10
        dark:bg-[#0d1c30]
      "
    >
      {/* SUN */}
      <i
        className={`
          bi bi-sun-fill
          absolute
          text-[18px]
          text-amber-400
          transition-all
          duration-500

          ${
            darkMode
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
      />

      {/* MOON */}
      <i
        className={`
          bi bi-moon-stars-fill
          absolute
          text-[17px]
          text-[#67c8ff]
          transition-all
          duration-500

          ${
            darkMode
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
      />
    </button>
  );
};

export default ThemeToggle;