import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Services",
    href: "#services",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-blue-100
        bg-white/95
        shadow-sm
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-[#07111f]/95
      "
    >
      <nav
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* MAIN NAVBAR */}
        {/* ================================================= */}

        <div
          className="
            grid
            h-[72px]
            grid-cols-[1fr_auto_1fr]
            items-center

            lg:flex
            lg:h-[76px]
            lg:justify-between
          "
        >
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <a
            href="#home"
            onClick={closeMenu}
            className="
              flex
              w-fit
              items-center
              gap-1
              !no-underline
            "
          >
            <span
              className="
                text-[18px]
                font-black
                tracking-[-0.04em]
                text-[#071b3b]

                sm:text-[20px]

                dark:text-white
              "
            >
              AIMAN
            </span>

            <span
              className="
                text-[18px]
                font-black
                tracking-[-0.04em]
                text-[#0877f9]

                sm:text-[20px]

                dark:text-[#58c7ff]
              "
            >
              SAHAR
            </span>
          </a>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative
                  py-2
                  text-[11px]
                  font-bold
                  !text-[#071b3b]
                  !no-underline

                  transition
                  duration-300

                  hover:!text-[#0877f9]

                  dark:!text-slate-200
                  dark:hover:!text-[#58c7ff]

                  after:absolute
                  after:bottom-0
                  after:left-1/2
                  after:h-[2px]
                  after:w-0
                  after:-translate-x-1/2
                  after:rounded-full
                  after:bg-[#0877f9]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full

                  dark:after:bg-[#58c7ff]
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ================================================= */}
          {/* DESKTOP RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            {/* DARK MODE */}
            <ThemeToggle />

            {/* CV */}
            <a
              href="/Aiman-Sahar-CV.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#071b3b]
                px-4
                py-2.5
                text-[10px]
                font-bold
                !text-white
                !no-underline

                shadow-sm
                transition
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#0877f9]
                hover:shadow-lg
                hover:shadow-blue-200

                dark:bg-[#0877f9]
                dark:hover:bg-[#58c7ff]
                dark:hover:!text-[#071b3b]
              "
            >
              <i className="bi bi-download" />

              Download CV
            </a>
          </div>

          {/* ================================================= */}
          {/* MOBILE CENTER TOGGLE */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center

              lg:hidden
            "
          >
            <ThemeToggle />
          </div>

          {/* ================================================= */}
          {/* MOBILE HAMBURGER */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              justify-end

              lg:hidden
            "
          >
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-blue-200
                bg-white
                text-[#071b3b]
                shadow-sm

                transition
                duration-300

                hover:border-[#0877f9]
                hover:bg-blue-50

                dark:border-white/15
                dark:bg-[#17263a]
                dark:text-white
                dark:shadow-none

                dark:hover:border-white/30
                dark:hover:bg-white/10
              "
            >
              <i
                className={`
                  bi
                  text-[19px]
                  transition-transform
                  duration-300

                  ${
                    menuOpen
                      ? "bi-x-lg rotate-90"
                      : "bi-list rotate-0"
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden

            ${
              menuOpen
                ? "max-h-[500px] pb-5 opacity-100"
                : "max-h-0 pb-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-blue-100
              bg-[#f8fbff]
              p-3
              shadow-sm

              dark:border-white/10
              dark:bg-[#0d1b2d]
              dark:shadow-none
            "
          >
            {/* ================================================= */}
            {/* MOBILE NAV LINKS */}
            {/* ================================================= */}

            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3

                    text-[11px]
                    font-bold
                    !text-[#071b3b]
                    !no-underline

                    transition
                    duration-300

                    hover:bg-blue-50
                    hover:!text-[#0877f9]

                    dark:!text-slate-200
                    dark:hover:bg-white/[0.06]
                    dark:hover:!text-[#58c7ff]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-100
                      text-[#0877f9]

                      dark:bg-[#0877f9]/15
                      dark:text-[#58c7ff]
                    "
                  >
                    <i
                      className={`
                        bi
                        ${
                          item.name === "Home"
                            ? "bi-house-fill"
                            : item.name === "About"
                            ? "bi-person-fill"
                            : item.name === "Skills"
                            ? "bi-code-slash"
                            : item.name === "Projects"
                            ? "bi-grid-fill"
                            : "bi-layers-fill"
                        }
                      `}
                    />
                  </span>

                  {item.name}

                  <i className="bi bi-arrow-right ml-auto text-[11px] opacity-50" />
                </a>
              ))}
            </div>

            {/* ================================================= */}
            {/* MOBILE CV */}
            {/* ================================================= */}

            <div
              className="
                mt-3
                border-t
                border-blue-100
                pt-3

                dark:border-white/10
              "
            >
              <a
                href="/Aiman-Sahar-CV.pdf"
                download
                onClick={closeMenu}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#071b3b]
                  px-4
                  py-3

                  text-[11px]
                  font-bold
                  !text-white
                  !no-underline

                  transition
                  duration-300

                  hover:bg-[#0877f9]

                  dark:bg-[#0877f9]
                  dark:hover:bg-[#58c7ff]
                  dark:hover:!text-[#071b3b]
                "
              >
                <i className="bi bi-download" />

                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;