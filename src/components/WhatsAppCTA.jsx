const WhatsAppCTA = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute -left-28 bottom-[-80px] h-[260px] w-[260px] rounded-full bg-blue-100/60 blur-[80px]" />

      <div className="absolute -right-24 top-10 h-[260px] w-[260px] rounded-full bg-cyan-100/50 blur-[90px]" />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1180px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-3

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div>
            {/* LABEL */}
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-[#f8fbff]
                px-3
                py-1.5
                shadow-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.18em]
                  text-[#0877f9]
                  sm:text-[10px]
                "
              >
                LET'S CONNECT
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                m-0
                text-[28px]
                font-black
                tracking-[-0.04em]
                text-[#071b3b]

                sm:text-[34px]
                lg:text-[38px]
              "
            >
              Let's Build Something
              <span className="text-[#0877f9]"> Great</span>
            </h2>
          </div>

          {/* HEADER DESCRIPTION */}
          <p
            className="
              m-0
              max-w-[430px]
              text-[11px]
              leading-5
              text-slate-500

              sm:text-[12px]
              sm:leading-6

              lg:text-right
            "
          >
            Have a website idea or a project in mind? Send me a message and
            let's discuss how we can turn it into a practical web solution.
          </p>
        </div>

        {/* ================= MAIN CONTACT CARD ================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-blue-100
            bg-gradient-to-br
            from-[#071b3b]
            via-[#07366f]
            to-[#075bc9]
            shadow-[0_20px_60px_rgba(7,45,100,0.18)]
          "
        >
          {/* DECORATIVE GLOWS */}
          <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-cyan-300/15 blur-[60px]" />

          <div className="absolute -bottom-24 left-[25%] h-[220px] w-[220px] rounded-full bg-blue-300/10 blur-[70px]" />

          {/* DOTS */}
          <div
            className="
              absolute
              right-[5%]
              top-[12%]
              hidden
              h-[100px]
              w-[100px]
              opacity-20
              lg:block
            "
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* CONTENT GRID */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
              gap-8
              p-5

              sm:p-7

              lg:grid-cols-[1fr_360px]
              lg:gap-12
              lg:p-10
            "
          >
            {/* ================================== */}
            {/* LEFT CONTENT */}
            {/* ================================== */}

            <div>
              {/* SMALL STATUS */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-1.5
                  backdrop-blur
                "
              >
                <span className="h-2 w-2 rounded-full bg-green-400" />

                <span className="text-[9px] font-bold tracking-[0.08em] text-blue-50">
                  AVAILABLE FOR NEW PROJECTS
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  m-0
                  max-w-[620px]
                  text-[25px]
                  font-black
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-white

                  sm:text-[31px]
                  lg:text-[35px]
                "
              >
                Have an idea that needs
                <span className="text-cyan-300"> the right build?</span>
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  max-w-[610px]
                  text-[11px]
                  leading-6
                  text-blue-100

                  sm:text-[12px]
                  sm:leading-6
                "
              >
                I’m open to freelance work, internships and web development
                projects. Whether you need a responsive frontend, a complete
                full-stack application or backend functionality, feel free to
                reach out and discuss your requirements.
              </p>

              {/* CONTACT INFO */}
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                "
              >
                {/* PHONE */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-4
                    py-3
                    backdrop-blur
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-500/15
                      text-green-400
                    "
                  >
                    <i className="bi bi-whatsapp text-[17px]" />
                  </div>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.12em] text-blue-200">
                      WhatsApp
                    </span>

                    <strong className="block text-[11px] font-bold text-white sm:text-[12px]">
                      0328-8899079
                    </strong>
                  </div>
                </div>

                {/* RESPONSE */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-4
                    py-3
                    backdrop-blur
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-cyan-400/10
                      text-cyan-300
                    "
                  >
                    <i className="bi bi-chat-dots-fill text-[15px]" />
                  </div>

                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.12em] text-blue-200">
                      Let's Discuss
                    </span>

                    <strong className="block text-[11px] font-bold text-white sm:text-[12px]">
                      Your Next Project
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================== */}
            {/* RIGHT WHATSAPP CARD */}
            {/* ================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/20
                bg-white/95
                p-5
                shadow-[0_18px_45px_rgba(0,0,0,0.15)]
                backdrop-blur

                sm:p-6
              "
            >
              {/* BACKGROUND DECORATION */}
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-green-100" />

              {/* ICON */}
              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-500
                  text-[27px]
                  text-white
                  shadow-[0_10px_25px_rgba(34,197,94,.28)]
                "
              >
                <i className="bi bi-whatsapp" />
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  mt-5
                  text-[20px]
                  font-black
                  tracking-[-0.025em]
                  text-[#071b3b]

                  sm:text-[22px]
                "
              >
                Start a Conversation
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  relative
                  mt-2
                  text-[10.5px]
                  leading-5
                  text-slate-500

                  sm:text-[11.5px]
                "
              >
                Tell me briefly what you want to build and I’ll be happy to
                discuss your project.
              </p>

              {/* BUTTON */}
              <a
                href="https://wa.me/923288899079"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  relative
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-green-500
                  px-5
                  py-3.5
                  text-[11px]
                  font-bold
                  !text-white
                  !no-underline
                  shadow-[0_10px_25px_rgba(34,197,94,.22)]
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:bg-green-600
                  hover:!text-white
                  hover:!no-underline
                  hover:shadow-[0_14px_30px_rgba(34,197,94,.30)]

                  sm:text-[12px]
                "
              >
                <i className="bi bi-whatsapp text-[16px]" />

                Chat on WhatsApp

                <i className="bi bi-arrow-right transition duration-300 group-hover:translate-x-1" />
              </a>

              {/* SMALL NOTE */}
              <div
                className="
                  relative
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                <span className="text-[8.5px] font-medium text-slate-400">
                  Direct WhatsApp message
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;