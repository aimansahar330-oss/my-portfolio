import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const isDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);

    setDarkMode(isDark);

    const syncTheme = () => {
      setDarkMode(
        document.documentElement.classList.contains("dark")
      );
    };

    window.addEventListener(
      "portfolio-theme-change",
      syncTheme
    );

    return () => {
      window.removeEventListener(
        "portfolio-theme-change",
        syncTheme
      );
    };
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    const nextTheme =
      !root.classList.contains("dark");

    root.classList.toggle("dark", nextTheme);

    root.style.colorScheme = nextTheme
      ? "dark"
      : "light";

    localStorage.setItem(
      "portfolio-theme",
      nextTheme ? "dark" : "light"
    );

    setDarkMode(nextTheme);

    window.dispatchEvent(
      new Event("portfolio-theme-change")
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        darkMode
          ? "Light Mode"
          : "Dark Mode"
      }
      className="
        relative
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        overflow-hidden

        rounded-xl
        border

        !border-blue-100
        !bg-[#f2f8ff]

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:!border-blue-300
        hover:shadow-md

        dark:!border-white/10
        dark:!bg-[#102033]
        dark:shadow-none

        dark:hover:!border-white/20
        dark:hover:!bg-[#15283f]
      "
    >
      {/* SUN */}
      <i
        className={`
          bi
          bi-sun-fill

          absolute

          !text-[18px]
          !text-amber-400

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
          bi
          bi-moon-stars-fill

          absolute

          !text-[17px]
          !text-[#58c7ff]

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