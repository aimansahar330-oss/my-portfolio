import cv from "../assets/Aiman_Sahar_CV.pdf";

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
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 lg:px-6">
        <div
          className="
            mx-auto
            flex
            h-[70px]
            max-w-[1280px]
            items-center
            justify-between
            rounded-2xl
            border
            border-white/70
            bg-white/85
            px-4
            shadow-[0_10px_40px_rgba(7,27,59,0.08)]
            backdrop-blur-xl
            sm:px-5
            lg:px-6
          "
        >
          {/* LOGO */}
          <a
            href="#home"
            className="
              group
              flex
              items-center
              no-underline
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
              "
            >
              {/* TOP GLOW */}
              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  h-8
                  w-8
                  rounded-full
                  bg-cyan-300/30
                  blur-md
                "
              ></span>

              {/* AS */}
              <span className="relative flex items-baseline text-[20px] font-black tracking-[-0.11em]">
                <span className="text-white">A</span>
                <span className="ml-[1px] text-[#58c7ff]">S</span>
              </span>

              {/* BOTTOM LINE */}
              <span
                className="
                  absolute
                  bottom-[5px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-white/60
                "
              ></span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              items-center
              rounded-xl
              border
              border-blue-100
              bg-[#f7fbff]
              p-1.5
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
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:!text-[#0877f9]
                  hover:shadow-sm
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
                    bg-[#0877f9]
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                ></span>
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* DOWNLOAD CV */}
            <a
              href={cv}
              download
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
                no-underline
                shadow-[0_8px_20px_rgba(8,119,249,0.23)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_28px_rgba(8,119,249,0.32)]
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
                  bg-white/15
                "
              >
                <i className="bi bi-download text-[11px]"></i>
              </span>

              Download CV

              <i className="bi bi-arrow-down-short text-[15px] transition-transform duration-300 group-hover:translate-y-0.5"></i>
            </a>

            {/* MOBILE MENU BUTTON */}
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
                border-blue-100
                bg-[#f2f8ff]
                shadow-sm
                transition
                hover:border-blue-300
                hover:bg-blue-50
                lg:hidden
              "
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-label="Open navigation menu"
            >
              <i className="bi bi-list text-[25px] text-[#0877f9]"></i>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OFFCANVAS */}
      <div
        className="offcanvas offcanvas-end !w-[300px] border-l border-blue-100"
        tabIndex="-1"
        id="mobileMenu"
      >
        {/* MOBILE HEADER */}
        <div className="offcanvas-header border-b border-blue-100 bg-[#f8fbff] px-5 py-4">
          {/* MOBILE LOGO */}
          <a
            href="#home"
            data-bs-dismiss="offcanvas"
            className="flex items-center no-underline"
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
              {/* TOP GLOW */}
              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  h-8
                  w-8
                  rounded-full
                  bg-cyan-300/30
                  blur-md
                "
              ></span>

              {/* AS */}
              <span className="relative flex items-baseline text-[20px] font-black tracking-[-0.11em]">
                <span className="text-white">A</span>
                <span className="ml-[1px] text-[#58c7ff]">S</span>
              </span>

              {/* BOTTOM LINE */}
              <span
                className="
                  absolute
                  bottom-[5px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-white/60
                "
              ></span>
            </div>
          </a>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* MOBILE BODY */}
        <div className="offcanvas-body bg-white px-4 py-5">
          <p className="mb-3 px-3 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
            Navigation
          </p>

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
                  no-underline
                  transition
                  hover:bg-[#eef7ff]
                  hover:!text-[#0877f9]
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
                      bg-blue-50
                      text-[10px]
                      font-black
                      text-[#0877f9]
                    "
                  >
                    0{index + 1}
                  </span>

                  {name}
                </span>

                <i className="bi bi-chevron-right text-[11px] text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0877f9]"></i>
              </a>
            ))}
          </div>

          {/* MOBILE DOWNLOAD CV */}
          <a
            href={cv}
            download
            className="
              mt-6
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
              no-underline
              shadow-lg
              shadow-blue-200
              transition
              hover:-translate-y-0.5
            "
          >
            <i className="bi bi-download"></i>
            Download CV
          </a>

          {/* AVAILABILITY */}
          <div className="mt-7 rounded-xl border border-blue-100 bg-[#f8fbff] p-4">
            <p className="m-0 text-[10px] font-bold text-[#071b3b]">
              Available for opportunities
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>

              <span className="text-[9px] text-slate-500">
                Freelance • Internship • Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;