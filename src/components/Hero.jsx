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

        dark:!from-[#06111f]
        dark:!via-[#081827]
        dark:!to-[#0b2138]

        pt-[95px]
        sm:pt-[100px]
        lg:pt-[90px]

        transition-colors
        duration-500
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -right-[140px]
          top-10
          h-[380px]
          w-[380px]
          rounded-full
          !bg-[#0877f9]/20
          blur-[110px]

          dark:!bg-[#0877f9]/15

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div
        className="
          absolute
          -left-[130px]
          bottom-[-100px]
          h-[300px]
          w-[300px]
          rounded-full
          !bg-cyan-200/30
          blur-[90px]

          dark:!bg-cyan-400/10
        "
      />

      {/* DOT PATTERN */}
      <div
        className="
          absolute
          left-[4%]
          top-[24%]
          hidden
          h-[120px]
          w-[120px]
          opacity-20
          dark:opacity-10
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#0877f9 1.2px, transparent 1.2px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* ================================================= */}
      {/* MAIN WRAPPER */}
      {/* ================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          items-center
          gap-10
          px-5
          pb-14
          pt-5

          sm:px-7
          sm:pb-16

          lg:min-h-[610px]
          lg:grid-cols-[minmax(0,1fr)_380px]
          lg:gap-20
          lg:px-8
          lg:py-12

          xl:grid-cols-[minmax(0,1fr)_400px]
          xl:gap-24
        "
      >
        {/* ================================================= */}
        {/* IMAGE */}
        {/* MOBILE FIRST / DESKTOP RIGHT */}
        {/* ================================================= */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center

            lg:[grid-column:2]
            lg:[grid-row:1]
            lg:justify-end
          "
        >
          {/* IMAGE GLOW */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[270px]
              w-[270px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              !bg-[#0877f9]/25
              blur-[60px]

              dark:!bg-[#0877f9]/20

              sm:h-[320px]
              sm:w-[320px]

              lg:left-auto
              lg:right-[-5px]
              lg:h-[400px]
              lg:w-[400px]
              lg:translate-x-0
              lg:blur-[85px]
            "
          />

          {/* ================================================= */}
          {/* MOBILE CIRCULAR IMAGE */}
          {/* ================================================= */}

          <div className="relative z-10 lg:hidden">
            <div
              className="
                relative
                h-[235px]
                w-[235px]
                rounded-full

                bg-gradient-to-br
                from-[#0877f9]
                via-[#38bdf8]
                to-[#071b3b]

                p-[5px]

                shadow-[0_20px_50px_rgba(8,119,249,.28)]

                dark:from-[#58c7ff]
                dark:via-[#0877f9]
                dark:to-[#06111f]
                dark:shadow-[0_20px_55px_rgba(8,119,249,.18)]

                sm:h-[285px]
                sm:w-[285px]

                md:h-[300px]
                md:w-[300px]
              "
            >
              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  !bg-white
                  p-[5px]

                  dark:!bg-[#0b1829]
                "
              >
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
                  !border-white
                  !bg-white
                  px-3
                  py-2
                  shadow-lg
                  backdrop-blur

                  dark:!border-white/10
                  dark:!bg-[#102033]
                  dark:shadow-[0_10px_30px_rgba(0,0,0,.28)]
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-green-500
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    !text-[#071b3b]

                    dark:!text-white
                  "
                >
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* DESKTOP ANGLED IMAGE */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              hidden

              w-[330px]

              rotate-[3deg]
              rounded-[28px]

              bg-gradient-to-br
              from-[#0985ff]
              via-[#0877f9]
              to-[#073a89]

              p-[6px]

              shadow-[0_30px_65px_rgba(0,74,170,.30)]

              transition
              duration-500

              hover:rotate-[1deg]

              dark:from-[#58c7ff]
              dark:via-[#0877f9]
              dark:to-[#071b3b]
              dark:shadow-[0_30px_70px_rgba(8,119,249,.18)]

              lg:block

              xl:w-[350px]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[23px]
                border-2
                !border-white
                !bg-white

                dark:!border-white/20
                dark:!bg-[#081827]
              "
            >
              <img
                src={profile}
                alt="Aiman Sahar"
                className="
                  h-[400px]
                  w-full

                  -rotate-[3deg]
                  scale-[1.06]

                  object-cover
                  object-top

                  transition
                  duration-500

                  hover:scale-[1.09]

                  xl:h-[420px]
                "
              />
            </div>
          </div>

          {/* ================================================= */}
          {/* ATTACHED FLOATING CARD */}
          {/* ================================================= */}

          <div
            className="
              absolute
              -right-12
              bottom-6
              z-20

              hidden
              min-w-[145px]

              rounded-2xl
              border
              !border-blue-300/30
              !bg-[#052d61]/95

              px-4
              py-4

              !text-white

              shadow-[0_15px_35px_rgba(0,0,0,.22)]
              backdrop-blur-xl

              dark:!border-white/10
              dark:!bg-[#0b1829]/95
              dark:shadow-[0_16px_40px_rgba(0,0,0,.38)]

              lg:block
            "
          >
            {/* ICON */}
            <div
              className="
                mb-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg

                !bg-white/10

                dark:!bg-white/[0.08]
              "
            >
              <i
                className="
                  bi
                  bi-code-slash
                  !text-[16px]
                  !text-cyan-300
                "
              />
            </div>

            {/* TEXT */}
            <p
              className="
                m-0
                !text-[12px]
                font-semibold
                leading-[1.55]
                !text-white
              "
            >
              Turning Ideas
              <br />
              Into Real
              <br />
              Web Solutions
            </p>

            {/* SMALL LINE */}
            <div
              className="
                mt-3
                h-[2px]
                w-8
                rounded-full
                !bg-cyan-300
              "
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            items-center
            [text-align:center]

            lg:max-w-[590px]
            lg:items-start
            lg:[grid-column:1]
            lg:[grid-row:1]
            lg:[text-align:left]
          "
        >
          {/* HELLO */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border

              !border-blue-200
              !bg-white/80

              px-3.5
              py-1.5

              shadow-sm
              backdrop-blur-md

              dark:!border-white/10
              dark:!bg-white/[0.06]
              dark:shadow-none
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#0877f9]
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#0877f9]

                  dark:bg-cyan-400
                "
              />
            </span>

            <span
              className="
                text-[9px]
                font-black
                tracking-[0.18em]

                !text-[#0877f9]

                dark:!text-[#58c7ff]

                sm:text-[10px]
              "
            >
              HELLO, I'M
            </span>
          </div>

          {/* ================================================= */}
          {/* NAME */}
          {/* ================================================= */}

          <h1
            className="
              m-0

              text-[38px]
              font-black
              leading-[0.95]
              tracking-[-0.055em]

              !text-[#071b3b]

              dark:!text-[#f8fafc]

              sm:text-[52px]
              md:text-[58px]
              lg:text-[62px]
              xl:text-[66px]
            "
          >
            AIMAN{" "}

            <span
              className="
                relative
                inline-block

                !text-[#0877f9]

                dark:!text-[#58c7ff]
              "
            >
              SAHAR

              <span
                className="
                  absolute
                  -bottom-1
                  left-1/2

                  h-[3px]
                  w-[62%]

                  -translate-x-1/2

                  rounded-full

                  bg-gradient-to-r
                  from-[#0877f9]
                  via-[#27a9ff]
                  to-cyan-300

                  dark:from-[#58c7ff]
                  dark:via-cyan-400
                  dark:to-blue-400

                  lg:left-4
                  lg:translate-x-0
                  sm:top-12
                "
              />
            </span>
          </h1>

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <h2
            className="
              mt-6

              text-[20px]
              font-black
              tracking-[-0.03em]

              !text-[#071b3b]

              dark:!text-[#f1f5f9]

              sm:text-[25px]
              lg:text-[28px]
            "
          >
            Full Stack Web Developer
          </h2>

          {/* VALUE LINE */}
          <p
            className="
              mt-2

              text-[11px]
              font-semibold
              tracking-[0.02em]

              !text-[#0a4a98]

              dark:!text-[#7dd3fc]

              sm:text-[13px]
            "
          >
            Building complete web solutions from interface to deployment.
          </p>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mt-2
              max-w-[540px]

              text-[12px]
              leading-[1.9]

              !text-slate-600

              dark:!text-[#aebdd0]

              sm:text-[13px]
            "
          >
            I build responsive full-stack web applications with clean
            interfaces, secure APIs and reliable database integration. I focus
            on practical features, smooth user flows and maintainable code.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div
            className="
              mt-6

              flex
              w-full
              flex-col
              gap-3

              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            {/* EXPLORE WORK */}
            <a
              href="#projects"
              className="
                group

                inline-flex
                items-center
                justify-center
                gap-3

                rounded-xl

                !bg-[#0877f9]

                px-6
                py-3.5

                text-[12px]
                font-bold

                !text-white
                !no-underline

                shadow-[0_12px_28px_rgba(8,119,249,.25)]

                transition
                duration-300

                hover:-translate-y-1
                hover:!bg-[#0757c8]
                hover:!text-white
                hover:!no-underline

                dark:shadow-[0_12px_30px_rgba(8,119,249,.18)]

                sm:text-[13px]
              "
            >
              <i className="bi bi-code-slash" />

              Explore My Work

              <i
                className="
                  bi
                  bi-arrow-right
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* ================================================= */}
            {/* WHATSAPP */}
            {/* ================================================= */}

            <a
              href="https://wa.me/923288899079"
              target="_blank"
              rel="noreferrer"
              className="
                group

                inline-flex
                items-center
                justify-center
                gap-3

                rounded-xl
                border

                !border-[#071b3b]/15
                !bg-white/80

                px-6
                py-3.5

                text-[12px]
                font-bold

                !text-[#071b3b]
                !no-underline

                transition
                duration-300

                hover:-translate-y-1
                hover:!border-green-400
                hover:!bg-green-500
                hover:!text-white
                hover:!no-underline

                dark:!border-green-400/25
                dark:!bg-green-500/10
                dark:!text-green-300

                dark:hover:!border-green-500
                dark:hover:!bg-green-500
                dark:hover:!text-white

                sm:text-[13px]
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

                  !bg-green-50
                  !text-green-500

                  transition
                  duration-300

                  dark:!bg-green-500/15
                  dark:!text-green-400

                  group-hover:!bg-white/20
                  group-hover:!text-white
                "
              >
                <i className="bi bi-whatsapp text-[12px]" />
              </span>

              Let's Connect
            </a>
          </div>

     {/* ================================================= */}
{/* SOCIAL LINKS */}
{/* ================================================= */}

<div
  className="
    mt-6

    flex
    flex-nowrap
    items-center
    justify-center

    gap-2

    sm:gap-3

    lg:justify-start
  "
>
  {/* FOLLOW ME */}
  <span
    className="
      mr-1
      shrink-0

      whitespace-nowrap

      text-[8px]
      font-black
      uppercase
      tracking-[0.12em]

      !text-slate-400

      dark:!text-slate-400

      sm:text-[9px]
      sm:tracking-[0.15em]
    "
  >
    Follow Me
  </span>

  {/* ================= GITHUB ================= */}

  <a
    href="https://github.com/aimansahar330-oss"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center

      rounded-xl
      border

      !border-slate-300
      !bg-white
      !text-[#0A66C2]
      !no-underline

      shadow-sm

      transition
      duration-300

      hover:-translate-y-1
      hover:!border-[#0A66C2]
      hover:!bg-[#0A66C2]
      hover:!text-white
      hover:!no-underline

      
      dark:!border-[#4ea5ff]/25
      dark:!bg-[#0A66C2]/15
      dark:!text-[#70baff]
      dark:shadow-none

      
      dark:hover:!border-[#0A66C2]
      dark:hover:!bg-[#0A66C2]
      dark:hover:!text-white

      sm:h-10
      sm:w-10
    "
  >
    <i className="bi bi-github text-[16px] sm:text-[18px]" />
  </a>

  {/* ================= LINKEDIN ================= */}

  <a
    href="https://www.linkedin.com/in/aiman-sahar-197872436?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center

      rounded-xl
      border

      !border-blue-200
      !bg-white
      !text-[#0A66C2]
      !no-underline

      shadow-sm

      transition
      duration-300

      hover:-translate-y-1
      hover:!border-[#0A66C2]
      hover:!bg-[#0A66C2]
      hover:!text-white

      dark:!border-[#4ea5ff]/25
      dark:!bg-[#0A66C2]/15
      dark:!text-[#70baff]
      dark:shadow-none

      dark:hover:!border-[#0A66C2]
      dark:hover:!bg-[#0A66C2]
      dark:hover:!text-white

      sm:h-10
      sm:w-10
    "
  >
    <i className="bi bi-linkedin text-[15px] sm:text-[17px]" />
  </a>

  {/* ================= FACEBOOK ================= */}

  <a
    href="https://www.facebook.com/share/18zpyVrgH7/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center

      rounded-xl
      border

      !border-blue-200
      !bg-white
      !text-[#1877F2]
      !no-underline

      shadow-sm

      transition
      duration-300

      hover:-translate-y-1
      hover:!border-[#1877F2]
      hover:!bg-[#1877F2]
      hover:!text-white

      dark:!border-[#5b9cff]/25
      dark:!bg-[#1877F2]/15
      dark:!text-[#70adff]
      dark:shadow-none

      dark:hover:!border-[#1877F2]
      dark:hover:!bg-[#1877F2]
      dark:hover:!text-white

      sm:h-10
      sm:w-10
    "
  >
    <i className="bi bi-facebook text-[15px] sm:text-[17px]" />
  </a>

  {/* DECORATIVE LINE - DESKTOP ONLY */}
  <div
    className="
      ml-1
      hidden
      h-px
      w-16

      bg-gradient-to-r
      from-blue-300
      to-transparent

      dark:from-[#58c7ff]/40

      lg:block
    "
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;