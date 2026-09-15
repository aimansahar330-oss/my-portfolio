const Footer = () => {
  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Services", "#services"],
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#031630]
        via-[#05234d]
        to-[#07366f]
        text-white
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -right-28 -top-20 h-[280px] w-[280px] rounded-full bg-blue-400/10 blur-[90px]" />

      <div className="absolute -left-24 bottom-[-100px] h-[250px] w-[250px] rounded-full bg-cyan-300/10 blur-[80px]" />

      {/* DOT PATTERN */}
      <div
        className="
          absolute
          right-[7%]
          top-[20%]
          hidden
          h-[90px]
          w-[90px]
          opacity-10
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1.1px, transparent 1.1px)",
          backgroundSize: "13px 13px",
        }}
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-14
        "
      >
        {/* ================= TOP FOOTER ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8

            md:grid-cols-2

            lg:grid-cols-[1.3fr_.8fr_.8fr]
            lg:gap-12
          "
        >
          {/* ================================= */}
          {/* BRAND */}
          {/* ================================= */}

          <div>
            {/* LOGO */}
            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-3
                !no-underline
                hover:!no-underline
              "
            >
              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[14px]
                  bg-gradient-to-br
                  from-[#0877f9]
                  to-[#38bdf8]
                  shadow-[0_10px_30px_rgba(8,119,249,.25)]
                "
              >
                <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/20 blur-md" />

                <span className="relative flex items-baseline text-[20px] font-black tracking-[-0.1em]">
                  <span className="text-white">A</span>
                  <span className="ml-[1px] text-[#d5f2ff]">S</span>
                </span>

                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-white/60" />
              </div>
            </a>

            {/* NAME */}
            <h3
              className="
                mt-4
                text-[20px]
                font-black
                tracking-[-0.03em]
                text-white
              "
            >
              Aiman
              <span className="ml-1 text-[#58c7ff]">
                Sahar
              </span>
            </h3>

            {/* ROLE */}
            <p
              className="
                mt-1
                text-[10px]
                font-semibold
                tracking-[0.05em]
                text-blue-200
              "
            >
              Full Stack Web Developer
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-[390px]
                text-[10.5px]
                leading-5
                text-blue-100/80

                sm:text-[11.5px]
                sm:leading-6
              "
            >
              Building responsive, reliable and practical web applications
              with clean interfaces and well-structured functionality.
            </p>
          </div>

          {/* ================================= */}
          {/* QUICK LINKS */}
          {/* ================================= */}

          <div>
            <p
              className="
                mb-4
                text-[9px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#58c7ff]
              "
            >
              Quick Links
            </p>

            <div className="flex flex-col gap-2.5">
              {navLinks.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-[10.5px]
                    font-semibold
                    !text-blue-100
                    !no-underline
                    transition
                    duration-300

                    hover:translate-x-1
                    hover:!text-white
                    hover:!no-underline
                  "
                >
                  <span
                    className="
                      h-[4px]
                      w-[4px]
                      rounded-full
                      bg-[#58c7ff]
                      transition
                      duration-300

                      group-hover:w-3
                    "
                  />

                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* ================================= */}
          {/* CONNECT */}
          {/* ================================= */}

          <div>
            <p
              className="
                mb-4
                text-[9px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#58c7ff]
              "
            >
              Connect
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-wrap gap-2.5">
              {/* GITHUB */}
              <a
                href="https://github.com/aimansahar330-oss"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/10
                  !text-white
                  !no-underline
                  backdrop-blur
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white
                  hover:!text-[#071b3b]
                  hover:!no-underline
                "
              >
                <i className="bi bi-github text-[16px]" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/aiman-sahar-197872436?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/10
                  !text-[#7fc4ff]
                  !no-underline
                  backdrop-blur
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                  hover:!text-white
                  hover:!no-underline
                "
              >
                <i className="bi bi-linkedin text-[16px]" />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923288899079"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-green-400/20
                  bg-green-400/10
                  !text-green-400
                  !no-underline
                  backdrop-blur
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-500
                  hover:bg-green-500
                  hover:!text-white
                  hover:!no-underline
                "
              >
                <i className="bi bi-whatsapp text-[16px]" />
              </a>
            </div>

            {/* AVAILABILITY */}
            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-2
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[8.5px] font-semibold text-blue-100">
                Available for new opportunities
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-9
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/10
            pt-5

            sm:flex-row
          "
        >
          <p
            className="
              m-0
              text-[8.5px]
              text-blue-200/70

              sm:text-[9px]
            "
          >
            © 2026 Aiman Sahar. All rights reserved.
          </p>

          <p
            className="
              m-0
              flex
              items-center
              gap-2
              text-[8.5px]
              text-blue-200/70

              sm:text-[9px]
            "
          >
            Crafted with

            <i className="bi bi-code-slash text-[#58c7ff]" />

            purpose & code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;