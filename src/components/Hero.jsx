import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f9fcff]
        via-[#eef7ff]
        to-[#dcecff]
        pt-[95px]
        sm:pt-[100px]
        lg:pt-[90px]
      "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -right-[140px] top-[40px] h-[360px] w-[360px] rounded-full bg-[#0877f9]/20 blur-[110px] sm:h-[500px] sm:w-[500px]" />

      <div className="absolute -left-[130px] bottom-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-200/30 blur-[90px]" />

      {/* DOT PATTERN */}
      <div
        className="
          absolute
          left-[4%]
          top-[24%]
          hidden
          h-[120px]
          w-[120px]
          opacity-25
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#0877f9 1.2px, transparent 1.2px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1320px]
          grid-cols-1
          items-center
          gap-9
          px-4
          pb-14
          pt-5
          sm:px-6
          sm:pb-16
          lg:min-h-[610px]
          lg:grid-cols-[1.05fr_.95fr]
          lg:gap-16
          lg:px-8
          lg:py-14
        "
      >
        {/* ===================================================== */}
        {/* LEFT CONTENT */}
        {/* Desktop: Left | Mobile: After Image */}
        {/* ===================================================== */}

        <div
          className="
            order-2
            relative
            z-10
            text-center
            lg:order-1
            lg:text-left
          "
        >
          {/* HELLO BADGE */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200/80
              bg-white/80
              px-3.5
              py-1.5
              shadow-sm
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0877f9] opacity-40"></span>

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0877f9]"></span>
            </span>

            <span className="text-[9px] font-black tracking-[0.18em] text-[#0877f9] sm:text-[10px]">
              HELLO, I'M
            </span>
          </div>

          {/* NAME */}
          <h1
            className="
              m-0
              text-[38px]
              font-black
              leading-[0.95]
              tracking-[-0.055em]
              text-[#071b3b]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[68px]
            "
          >
            AIMAN{" "}

            <span className="relative inline-block text-[#0877f9]">
              SAHAR

              <span
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-[3px]
                  w-[65%]
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-[#0877f9]
                  via-[#27a9ff]
                  to-cyan-300
                  lg:left-0
                  lg:translate-x-0
                "
              ></span>
            </span>
          </h1>

          {/* ROLE */}
          <h2
            className="
              mt-6
              text-[20px]
              font-black
              tracking-[-0.03em]
              text-[#071b3b]
              sm:text-[25px]
              lg:text-[29px]
            "
          >
            Full Stack Web Developer
          </h2>

          {/* SHORT VALUE LINE */}
          <p
            className="
              mt-2
              text-[11px]
              font-semibold
              tracking-[0.02em]
              text-[#0a4a98]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            Building fast, scalable & user-focused web products.
          </p>

          {/* SKILLS PILLS */}
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              lg:justify-start
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-blue-100
                bg-white/80
                px-3
                py-1.5
                text-[9px]
                font-bold
                text-[#071b3b]
                shadow-sm
              "
            >
              <i className="bi bi-window text-[#0877f9]"></i>
              Modern UI
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-blue-100
                bg-white/80
                px-3
                py-1.5
                text-[9px]
                font-bold
                text-[#071b3b]
                shadow-sm
              "
            >
              <i className="bi bi-braces text-[#0877f9]"></i>
              Full Stack
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-blue-100
                bg-white/80
                px-3
                py-1.5
                text-[9px]
                font-bold
                text-[#071b3b]
                shadow-sm
              "
            >
              <i className="bi bi-lightning-charge-fill text-[#0877f9]"></i>
              Fast & Scalable
            </span>
          </div>

          {/* SHORT DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[540px]
              text-[12px]
              leading-6
              text-slate-600
              sm:text-[13px]
              lg:mx-0
            "
          >
            I turn ideas into clean, responsive and reliable web applications
            built for real users and real business needs.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-6
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
              sm:flex-wrap
              lg:justify-start
            "
          >
            {/* EXPLORE BUTTON */}
            <a
              href="#projects"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-[#0877f9]
                to-[#0756c7]
                px-6
                py-3.5
                text-[12px]
                font-bold
                !text-white
                no-underline
                shadow-[0_12px_28px_rgba(8,119,249,.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(8,119,249,.32)]
                sm:text-[13px]
              "
            >
              <span className="absolute inset-0 -translate-x-[110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[110%]"></span>

              <i className="bi bi-code-slash relative"></i>

              <span className="relative">
                Explore My Work
              </span>

              <i className="bi bi-arrow-right relative transition duration-300 group-hover:translate-x-1"></i>
            </a>

            {/* WHATSAPP */}
            <a
  href="https://wa.me/923288899079"
  target="_blank"
  rel="noreferrer"
  className="
    hero-whatsapp-btn
    group
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-[#071b3b]/15
    bg-white/80
    px-6
    py-3.5
    text-[12px]
    font-bold
    !text-[#071b3b]
    !no-underline
    shadow-sm
    transition
    duration-300
    hover:-translate-y-1
    sm:text-[13px]
  "
>
  <span className="hero-whatsapp-icon flex h-6 w-6 items-center justify-center rounded-md bg-green-50 text-green-500">
    <i className="bi bi-whatsapp text-[12px]" />
  </span>

  Let's Connect
</a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            <span className="mr-1 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
              Follow Me
            </span>

            {/* GITHUB */}
           <a
  href="https://github.com/aimansahar330-oss"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="
    hero-github-btn
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl
    border
    border-slate-200
    bg-white
    !text-[#071b3b]
    !no-underline
    shadow-sm
    transition
    duration-300
    hover:-translate-y-1
  "
>
  <i className="bi bi-github text-[17px]" />
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
                border-blue-200
                bg-white
                !text-[#0A66C2]
                no-underline
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0A66C2]
                hover:bg-[#0A66C2]
                hover:!text-white
                hover:shadow-lg
              "
            >
              <i className="bi bi-linkedin text-[17px]"></i>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/18zpyVrgH7/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
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
                !text-[#1877F2]
                no-underline
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#1877F2]
                hover:bg-[#1877F2]
                hover:!text-white
                hover:shadow-lg
              "
            >
              <i className="bi bi-facebook text-[17px]"></i>
            </a>

            <div className="ml-1 hidden h-px w-16 bg-gradient-to-r from-blue-300 to-transparent sm:block"></div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* RIGHT IMAGE */}
        {/* Desktop: Right | Mobile: First */}
        {/* ===================================================== */}

        <div
          className="
            order-1
            relative
            mx-auto
            flex
            w-full
            items-center
            justify-center
            lg:order-2
            lg:max-w-[520px]
          "
        >
          {/* IMAGE GLOW */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[250px]
              w-[250px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0877f9]/25
              blur-[55px]
              sm:h-[300px]
              sm:w-[300px]
              lg:h-[450px]
              lg:w-[450px]
              lg:blur-[80px]
            "
          />

          {/* MOBILE CIRCULAR IMAGE */}
          <div className="relative z-10 flex lg:hidden">
            <div
              className="
                relative
                flex
                h-[235px]
                w-[235px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#0877f9]
                via-[#36bffa]
                to-[#071b3b]
                p-[5px]
                shadow-[0_20px_50px_rgba(8,119,249,0.30)]
                sm:h-[280px]
                sm:w-[280px]
                md:h-[305px]
                md:w-[305px]
              "
            >
              <div className="h-full w-full rounded-full bg-white p-[5px]">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={profile}
                    alt="Aiman Sahar"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* AVAILABLE BADGE */}
              <div
                className="
                  absolute
                  bottom-[10px]
                  right-[-8px]
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/70
                  bg-white/95
                  px-3
                  py-2
                  shadow-lg
                  backdrop-blur
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70"></span>

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>

                <span className="text-[9px] font-bold text-[#071b3b]">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div
            className="
              relative
              z-10
              hidden
              w-[82%]
              rotate-[3deg]
              rounded-[30px]
              bg-gradient-to-br
              from-[#0985ff]
              via-[#0877f9]
              to-[#073a89]
              p-[6px]
              shadow-[0_30px_65px_rgba(0,74,170,.30)]
              lg:block
            "
          >
            <div className="overflow-hidden rounded-[24px] border-2 border-white bg-white">
              <img
                src={profile}
                alt="Aiman Sahar"
                className="
                  h-[455px]
                  w-full
                  -rotate-[3deg]
                  scale-[1.06]
                  object-cover
                  object-top
                  transition
                  duration-500
                  hover:scale-[1.09]
                "
              />
            </div>
          </div>

          {/* DESKTOP FLOATING CARD */}
          <div
            className="
              absolute
              -right-2
              bottom-10
              z-20
              hidden
              rounded-2xl
              border
              border-blue-300/30
              bg-[#052d61]/90
              px-5
              py-4
              text-white
              shadow-xl
              backdrop-blur-xl
              lg:block
            "
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <i className="bi bi-code-slash text-lg text-cyan-300"></i>
            </div>

            <p className="m-0 text-[14px] font-semibold leading-5">
              Turning Ideas
              <br />
              Into Real
              <br />
              Web Solutions
            </p>

            <div className="mt-3 h-[2px] w-8 rounded-full bg-cyan-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;