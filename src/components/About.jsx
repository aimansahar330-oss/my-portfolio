import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="
        !bg-white
        py-12
        transition-colors
        duration-500

        dark:!bg-[#06111f]

        sm:py-14
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1180px]
          grid-cols-1
          gap-10
          px-4

          sm:px-6

          md:gap-12

          lg:grid-cols-[300px_1fr]
          lg:items-start
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* PHOTO */}
        {/* ================================================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[320px]

            sm:max-w-[360px]

            lg:mx-0
            lg:max-w-none
          "
        >
          {/* PHOTO FRAME */}
          <div
            className="
              rounded-[22px]

              bg-gradient-to-b
              from-[#0877f9]
              to-[#063b83]

              p-[5px]

              shadow-xl
              shadow-blue-200

              transition
              duration-500

              dark:from-[#58c7ff]
              dark:via-[#0877f9]
              dark:to-[#071b3b]
              dark:shadow-[0_20px_50px_rgba(8,119,249,.16)]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[17px]

                !bg-white

                dark:!bg-[#0b1829]
              "
            >
              <img
                src={profile}
                alt="Aiman Sahar"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  object-top

                  sm:h-[340px]

                  lg:h-[280px]
                "
              />
            </div>
          </div>

          {/* ================================================= */}
          {/* PHOTO TEXT CARD */}
          {/* ================================================= */}

          <div
            className="
              absolute
              bottom-3
              left-3
              right-3

              rounded-xl

              !bg-[#052c60]/90

              px-4
              py-3

              !text-white

              shadow-lg
              backdrop-blur

              dark:!border
              dark:!border-white/10
              dark:!bg-[#081827]/95
              dark:shadow-[0_10px_30px_rgba(0,0,0,.28)]
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

                  !bg-white/10

                  dark:!bg-white/[0.08]
                "
              >
                <i
                  className="
                    bi
                    bi-briefcase-fill
                    !text-[16px]
                    !text-cyan-300
                  "
                />
              </div>

              <span
                className="
                  text-[10px]
                  leading-[1.6]
                  !text-white

                  sm:text-[11px]
                  sm:leading-5
                "
              >
                Passionate about
                <br />
                building a better web
                <br />
                for tomorrow.
              </span>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="min-w-0">
          {/* LABEL */}
          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border

              !border-blue-200
              !bg-[#f8fbff]

              px-3
              py-1.5

              shadow-sm

              dark:!border-white/10
              dark:!bg-white/[0.05]
              dark:shadow-none
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full

                !bg-[#0877f9]

                dark:!bg-[#58c7ff]
              "
            />

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
              ABOUT ME
            </span>
          </div>

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <div className="flex items-center gap-4">
            <h2
              className="
                m-0

                text-[25px]
                font-black
                leading-[1.15]
                tracking-[-0.03em]

                !text-[#071b3b]

                dark:!text-[#f8fafc]

                sm:text-[30px]
                md:text-[34px]
              "
            >
              Turning Ideas Into Real-World
              <span
                className="
                  !text-[#0877f9]

                  dark:!text-[#58c7ff]
                "
              >
                {" "}
                Solutions
              </span>
            </h2>

            <div
              className="
                hidden
                h-[2px]
                flex-1

                !bg-blue-500

                dark:!bg-[#58c7ff]/40

                lg:block
              "
            />
          </div>

          {/* ================================================= */}
          {/* PARAGRAPH */}
          {/* ================================================= */}

          <p
            className="
              mt-4
              max-w-[920px]

              text-[12.5px]
              leading-6

              !text-slate-600

              dark:!text-[#aebdd0]

              sm:text-[13px]
              sm:leading-6
            "
          >
            I'm{" "}
            <strong
              className="
                !text-[#071b3b]

                dark:!text-white
              "
            >
              Aiman Sahar
            </strong>
            , a motivated and detail-oriented Full Stack Web Developer with a
            strong passion for creating digital solutions that make a
            difference. I enjoy turning ideas into practical web applications,
            combining clean design with powerful functionality.
          </p>

          {/* ================================================= */}
          {/* CARDS */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-3

              sm:mt-7
              sm:grid-cols-2

              lg:grid-cols-3
              lg:gap-4
            "
          >
            {/* ================================================= */}
            {/* CARD 1 */}
            {/* ================================================= */}

            <div
              className="
                group
                rounded-xl
                border

                !border-blue-200
                !bg-[#f7fbff]

                p-4

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:!border-[#0877f9]
                hover:shadow-lg
                hover:shadow-blue-100

                dark:!border-white/10
                dark:!bg-[#0c1b2e]
                dark:shadow-none

                dark:hover:!border-[#58c7ff]/35
                dark:hover:shadow-[0_15px_35px_rgba(8,119,249,.10)]

                sm:p-5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    !bg-[#0877f9]

                    text-lg
                    !text-white

                    shadow-[0_8px_18px_rgba(8,119,249,.20)]

                    transition
                    duration-300

                    group-hover:scale-105

                    dark:!bg-[#0877f9]
                    dark:shadow-[0_8px_20px_rgba(8,119,249,.16)]

                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-folder-fill" />
                </div>

                <div className="min-w-0">
                  <strong
                    className="
                      block
                      text-[24px]
                      font-black

                      !text-[#071b3b]

                      dark:!text-white

                      sm:text-[26px]
                    "
                  >
                    2
                  </strong>

                  <span
                    className="
                      block
                      text-[11px]
                      font-bold

                      !text-[#071b3b]

                      dark:!text-slate-200
                    "
                  >
                    Featured Projects
                  </span>

                  <small
                    className="
                      block
                      text-[9px]

                      !text-slate-500

                      dark:!text-slate-400

                      sm:text-[10px]
                    "
                  >
                    Real-world applications
                  </small>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CARD 2 */}
            {/* ================================================= */}

            <div
              className="
                group
                rounded-xl
                border

                !border-blue-200
                !bg-[#f7fbff]

                p-4

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:!border-[#0877f9]
                hover:shadow-lg
                hover:shadow-blue-100

                dark:!border-white/10
                dark:!bg-[#0c1b2e]
                dark:shadow-none

                dark:hover:!border-[#58c7ff]/35
                dark:hover:shadow-[0_15px_35px_rgba(8,119,249,.10)]

                sm:p-5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    !bg-[#0877f9]

                    text-lg
                    !text-white

                    shadow-[0_8px_18px_rgba(8,119,249,.20)]

                    transition
                    duration-300

                    group-hover:scale-105

                    dark:!bg-[#0877f9]

                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-layers-fill" />
                </div>

                <div className="min-w-0">
                  <strong
                    className="
                      block
                      text-[15px]
                      font-black

                      !text-[#071b3b]

                      dark:!text-white

                      sm:text-[16px]
                    "
                  >
                    MERN Stack
                  </strong>

                  <span
                    className="
                      block
                      text-[11px]
                      font-bold

                      !text-[#071b3b]

                      dark:!text-slate-200
                    "
                  >
                    Focus
                  </span>

                  <small
                    className="
                      block
                      text-[9px]

                      !text-slate-500

                      dark:!text-slate-400

                      sm:text-[10px]
                    "
                  >
                    Frontend to Backend
                  </small>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* CARD 3 */}
            {/* ================================================= */}

            <div
              className="
                group
                rounded-xl
                border

                !border-blue-200
                !bg-[#f7fbff]

                p-4

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:!border-[#0877f9]
                hover:shadow-lg
                hover:shadow-blue-100

                dark:!border-white/10
                dark:!bg-[#0c1b2e]
                dark:shadow-none

                dark:hover:!border-[#58c7ff]/35
                dark:hover:shadow-[0_15px_35px_rgba(8,119,249,.10)]

                sm:col-span-2
                sm:p-5

                lg:col-span-1
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    !bg-[#0877f9]

                    text-lg
                    !text-white

                    shadow-[0_8px_18px_rgba(8,119,249,.20)]

                    transition
                    duration-300

                    group-hover:scale-105

                    dark:!bg-[#0877f9]

                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-graph-up-arrow" />
                </div>

                <div className="min-w-0">
                  <strong
                    className="
                      block
                      text-[13px]
                      font-black

                      !text-[#071b3b]

                      dark:!text-white

                      sm:text-[14px]
                    "
                  >
                    Frontend + Backend
                  </strong>

                  <span
                    className="
                      block
                      text-[11px]
                      font-bold

                      !text-[#071b3b]

                      dark:!text-slate-200
                    "
                  >
                    Complete Solutions
                  </span>

                  <small
                    className="
                      block
                      text-[9px]

                      !text-slate-500

                      dark:!text-slate-400

                      sm:text-[10px]
                    "
                  >
                    End-to-end development
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;