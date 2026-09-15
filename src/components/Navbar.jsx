import cv from "../assets/Aiman_Sahar_CV.pdf";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Services", "#services"],
  ];

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50

          w-full

          px-3
          pt-3

          sm:px-5
          lg:px-6
        "
      >
        <div
          className="
            relative
            mx-auto

            flex
            h-[70px]
            max-w-[1280px]
            items-center
            justify-between

            rounded-2xl
            border

            !border-white/70
            !bg-white/90

            px-4

            shadow-[0_10px_40px_rgba(7,27,59,0.08)]

            backdrop-blur-xl

            transition-all
            duration-300

            dark:!border-white/10
            dark:!bg-[#071321]/90
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)]

            sm:px-5
            lg:px-6
          "
        >
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <a
            href="#home"
            className="
              group
              flex
              items-center

              !no-underline

              hover:!no-underline
            "
          >
            <div
              className="
                relative

                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center

                overflow-hidden

                rounded-[14px]

                bg-gradient-to-br
                from-[#071b3b]
                via-[#0a356b]
                to-[#0877f9]

                shadow-[0_10px_25px_rgba(8,119,249,0.25)]

                transition
                duration-300

                group-hover:-translate-y-0.5
                group-hover:rotate-[-2deg]

                dark:shadow-[0_10px_28px_rgba(8,119,249,0.22)]
              "
            >
              {/* GLOW */}
              <span
                className="
                  absolute
                  -right-3
                  -top-3

                  h-8
                  w-8

                  rounded-full

                  !bg-cyan-300/30

                  blur-md
                "
              />

              {/* AS */}
              <span
                className="
                  relative
                  flex
                  items-baseline

                  text-[20px]
                  font-black
                  tracking-[-0.11em]
                "
              >
                <span className="!text-white">
                  A
                </span>

                <span className="ml-[1px] !text-[#58c7ff]">
                  S
                </span>
              </span>

              {/* LINE */}
              <span
                className="
                  absolute
                  bottom-[5px]
                  left-1/2

                  h-[2px]
                  w-5

                  -translate-x-1/2

                  rounded-full

                  !bg-white/60
                "
              />
            </div>
          </a>

          {/* ================================================= */}
          {/* MOBILE CENTER THEME TOGGLE */}
          {/* ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20

              -translate-x-1/2
              -translate-y-1/2

              lg:hidden
            "
          >
            <ThemeToggle />
          </div>

          {/* ================================================= */}
          {/* DESKTOP NAV */}
          {/* ================================================= */}

          <nav
            className="
              hidden
              items-center

              rounded-xl
              border

              !border-blue-100
              !bg-[#f7fbff]

              p-1.5

              transition-all
              duration-300

              dark:!border-white/10
              dark:!bg-white/[0.04]

              lg:flex
            "
          >
            {navItems.map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="
                  group
                  relative

                  rounded-lg

                  px-4
                  py-2

                  text-[12px]
                  font-bold

                  !text-[#34445f]
                  !no-underline

                  transition-all
                  duration-300

                  hover:!bg-white
                  hover:!text-[#0877f9]
                  hover:!no-underline
                  hover:shadow-sm

                  dark:!text-slate-300

                  dark:hover:!bg-white/[0.07]
                  dark:hover:!text-[#58c7ff]
                  dark:hover:shadow-none
                "
              >
                {name}

                <span
                  className="
                    absolute
                    bottom-[3px]
                    left-1/2

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    rounded-full

                    !bg-[#0877f9]

                    transition-all
                    duration-300

                    group-hover:w-5

                    dark:!bg-[#58c7ff]
                  "
                />
              </a>
            ))}
          </nav>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div className="flex items-center gap-2">
            {/* DESKTOP THEME TOGGLE */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            {/* ================================================= */}
            {/* DOWNLOAD CV */}
            {/* ================================================= */}

            <a
              href={cv}
              download="Aiman_Sahar_CV.pdf"
              className="
                group

                hidden
                items-center
                gap-2.5

                rounded-xl

                bg-gradient-to-r
                from-[#0877f9]
                to-[#0757c8]

                px-5
                py-3

                text-[11px]
                font-bold

                !text-white
                !no-underline

                shadow-[0_8px_20px_rgba(8,119,249,0.23)]

                transition
                duration-300

                hover:-translate-y-0.5
                hover:!text-white
                hover:!no-underline
                hover:shadow-[0_12px_28px_rgba(8,119,249,0.32)]

                dark:from-[#118cff]
                dark:to-[#0877f9]
                dark:shadow-[0_8px_25px_rgba(8,119,249,.18)]

                lg:inline-flex
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center

                  rounded-md

                  !bg-white/15
                "
              >
                <i className="bi bi-download text-[11px]" />
              </span>

              Download CV

              <i
                className="
                  bi
                  bi-arrow-down-short

                  text-[15px]

                  transition-transform
                  duration-300

                  group-hover:translate-y-0.5
                "
              />
            </a>

            {/* ================================================= */}
            {/* MOBILE HAMBURGER */}
            {/* ================================================= */}

            <button
              type="button"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl
                border

                !border-blue-100
                !bg-[#f2f8ff]

                shadow-sm

                transition
                duration-300

                hover:!border-blue-300
                hover:!bg-blue-50

                dark:!border-white/10
                dark:!bg-white/[0.06]
                dark:shadow-none

                dark:hover:!border-white/20
                dark:hover:!bg-white/[0.10]

                lg:hidden
              "
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-label="Open navigation menu"
            >
              <i
                className="
                  bi
                  bi-list

                  !text-[25px]
                  !text-[#0877f9]

                  dark:!text-[#58c7ff]
                "
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* MOBILE OFFCANVAS */}
      {/* ================================================= */}

      <div
        className="
          offcanvas
          offcanvas-end

          !w-[300px]

          border-l

          !border-blue-100
          !bg-white

          dark:!border-white/10
          dark:!bg-[#071321]
        "
        tabIndex="-1"
        id="mobileMenu"
      >
        {/* ================================================= */}
        {/* MOBILE MENU HEADER */}
        {/* ================================================= */}

        <div
          className="
            offcanvas-header

            border-b

            !border-blue-100
            !bg-[#f8fbff]

            px-5
            py-4

            dark:!border-white/10
            dark:!bg-[#081727]
          "
        >
          {/* LOGO */}
          <a
            href="#home"
            data-bs-dismiss="offcanvas"
            className="
              flex
              items-center

              !no-underline

              hover:!no-underline
            "
          >
            <div
              className="
                relative

                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center

                overflow-hidden

                rounded-[14px]

                bg-gradient-to-br
                from-[#071b3b]
                via-[#0a356b]
                to-[#0877f9]

                shadow-[0_8px_20px_rgba(8,119,249,0.25)]
              "
            >
              <span
                className="
                  absolute
                  -right-3
                  -top-3

                  h-8
                  w-8

                  rounded-full

                  !bg-cyan-300/30

                  blur-md
                "
              />

              <span
                className="
                  relative
                  flex
                  items-baseline

                  text-[20px]
                  font-black
                  tracking-[-0.11em]
                "
              >
                <span className="!text-white">
                  A
                </span>

                <span className="ml-[1px] !text-[#58c7ff]">
                  S
                </span>
              </span>

              <span
                className="
                  absolute
                  bottom-[5px]
                  left-1/2

                  h-[2px]
                  w-5

                  -translate-x-1/2

                  rounded-full

                  !bg-white/60
                "
              />
            </div>
          </a>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="
              btn-close

              dark:invert
              dark:opacity-80
            "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU BODY */}
        {/* ================================================= */}

        <div
          className="
            offcanvas-body

            !bg-white

            px-4
            py-5

            dark:!bg-[#071321]
          "
        >
          {/* NAVIGATION TITLE */}
          <p
            className="
              mb-3
              px-3

              text-[9px]
              font-black
              uppercase
              tracking-[0.18em]

              !text-slate-400

              dark:!text-slate-500
            "
          >
            Navigation
          </p>

          {/* ================================================= */}
          {/* NAV LINKS */}
          {/* ================================================= */}

          <div className="flex flex-col gap-1.5">
            {navItems.map(([name, url], index) => (
              <a
                key={name}
                href={url}
                data-bs-dismiss="offcanvas"
                className="
                  group

                  flex
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  text-[13px]
                  font-bold

                  !text-[#071b3b]
                  !no-underline

                  transition
                  duration-300

                  hover:!bg-[#eef7ff]
                  hover:!text-[#0877f9]
                  hover:!no-underline

                  dark:!text-slate-200

                  dark:hover:!bg-white/[0.06]
                  dark:hover:!text-[#58c7ff]
                "
              >
                <span className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center

                      rounded-lg

                      !bg-blue-50

                      text-[10px]
                      font-black

                      !text-[#0877f9]

                      dark:!bg-white/[0.06]
                      dark:!text-[#58c7ff]
                    "
                  >
                    0{index + 1}
                  </span>

                  {name}
                </span>

                <i
                  className="
                    bi
                    bi-chevron-right

                    text-[11px]

                    !text-slate-300

                    transition

                    group-hover:translate-x-1
                    group-hover:!text-[#0877f9]

                    dark:!text-slate-600
                    dark:group-hover:!text-[#58c7ff]
                  "
                />
              </a>
            ))}
          </div>

          {/* ================================================= */}
          {/* APPEARANCE / DARK MODE */}
          {/* ================================================= */}

          <div
            className="
              mt-5

              flex
              items-center
              justify-between
              gap-3

              rounded-2xl
              border

              !border-blue-100
              !bg-[#f8fbff]

              px-4
              py-3

              shadow-sm

              transition-all
              duration-300

              dark:!border-white/10
              dark:!bg-white/[0.04]
              dark:shadow-none
            "
          >
            {/* LEFT SIDE */}
            <div className="flex min-w-0 items-center gap-3">
              {/* APPEARANCE ICON */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl

                  !bg-blue-50
                  !text-[#0877f9]

                  transition-colors
                  duration-300

                  dark:!bg-[#0877f9]/15
                  dark:!text-[#58c7ff]
                "
              >
                <i className="bi bi-circle-half text-[16px]" />
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <p
                  className="
                    m-0

                    text-[10px]
                    font-black

                    !text-[#071b3b]

                    dark:!text-white
                  "
                >
                  Appearance
                </p>

                <span
                  className="
                    mt-0.5
                    block

                    whitespace-nowrap

                    text-[8.5px]

                    !text-slate-500

                    dark:!text-slate-400
                  "
                >
                  Light / Dark Mode
                </span>
              </div>
            </div>

            {/* ACTUAL TOGGLE */}
            <ThemeToggle />
          </div>

          {/* ================================================= */}
          {/* DOWNLOAD CV MOBILE */}
          {/* ================================================= */}

          <a
            href={cv}
            download="Aiman_Sahar_CV.pdf"
            className="
              mt-5

              flex
              w-full
              items-center
              justify-center
              gap-3

              rounded-xl

              bg-gradient-to-r
              from-[#0877f9]
              to-[#0757c8]

              px-5
              py-3.5

              text-[12px]
              font-bold

              !text-white
              !no-underline

              shadow-lg
              shadow-blue-200

              transition
              duration-300

              hover:-translate-y-0.5
              hover:!text-white
              hover:!no-underline

              dark:from-[#118cff]
              dark:to-[#0877f9]
              dark:shadow-none
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

                !bg-white/15
              "
            >
              <i className="bi bi-download text-[12px]" />
            </span>

            Download CV
          </a>

          {/* ================================================= */}
          {/* AVAILABILITY */}
          {/* ================================================= */}

          <div
            className="
              mt-6

              rounded-xl
              border

              !border-blue-100
              !bg-[#f8fbff]

              p-4

              transition-colors
              duration-300

              dark:!border-white/10
              dark:!bg-white/[0.04]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-lg

                  !bg-green-50
                  !text-green-500

                  dark:!bg-green-500/10
                  dark:!text-green-400
                "
              >
                <i className="bi bi-briefcase-fill text-[14px]" />
              </div>

              <div>
                <p
                  className="
                    m-0

                    text-[10px]
                    font-bold

                    !text-[#071b3b]

                    dark:!text-white
                  "
                >
                  Available for opportunities
                </p>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="
                        absolute
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-green-400
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        h-2
                        w-2
                        rounded-full
                        bg-green-500
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[9px]

                      !text-slate-500

                      dark:!text-slate-400
                    "
                  >
                    Freelance • Internship • Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;