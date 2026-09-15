import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="bg-white py-12 sm:py-14 lg:py-16">
      <div
        className="
          mx-auto
          grid
          max-w-[1320px]
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
        {/* PHOTO */}
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
          <div
            className="
              rounded-[22px]
              bg-gradient-to-b
              from-[#0877f9]
              to-[#063b83]
              p-[5px]
              shadow-xl
              shadow-blue-200
            "
          >
            <div className="overflow-hidden rounded-[17px]">
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

          {/* PHOTO TEXT BOX */}
          <div
            className="
              absolute
              bottom-3
              left-3
              right-3
              rounded-xl
              bg-[#052c60]/90
              px-4
              py-3
              text-white
              backdrop-blur
            "
          >
            <div className="flex items-center gap-3">
              <i className="bi bi-briefcase-fill text-lg sm:text-xl"></i>

              <span className="text-[10px] leading-[1.6] sm:text-[11px] sm:leading-5">
                Passionate about
                <br />
                building a better web
                <br />
                for tomorrow.
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0">
          {/* LABEL */}
          <p className="mb-2 text-[10px] font-black tracking-[0.15em] text-[#0877f9] sm:text-[11px]">
            ▷ ABOUT ME
          </p>

          {/* HEADING */}
          <div className="flex items-center gap-4">
            <h2
              className="
                m-0
                text-[25px]
                font-black
                leading-[1.15]
                tracking-[-0.03em]
                text-[#071b3b]
                sm:text-[30px]
                md:text-[34px]
              "
            >
              Turning Ideas Into Real-World
              <span className="text-[#0877f9]"> Solutions</span>
            </h2>

            <div className="hidden h-[2px] flex-1 bg-blue-500 lg:block"></div>
          </div>

          {/* PARAGRAPH */}
          <p
            className="
              mt-4
              max-w-[920px]
              text-[12.5px]
              leading-6
              text-slate-600
              sm:text-[13px]
              sm:leading-6
            "
          >
            I'm <strong className="text-[#071b3b]">Aiman Sahar</strong>, a
            motivated and detail-oriented Full Stack Web Developer with a
            strong passion for creating digital solutions that make a
            difference. I enjoy turning ideas into practical web applications,
            combining clean design with powerful functionality.
          </p>

          {/* CARDS */}
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
            {/* CARD 1 */}
            <div className="rounded-xl border border-blue-200 bg-[#f7fbff] p-4 sm:p-5">
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
                    bg-[#0877f9]
                    text-lg
                    text-white
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-folder-fill"></i>
                </div>

                <div className="min-w-0">
                  <strong className="block text-[24px] font-black text-[#071b3b] sm:text-[26px]">
                    2
                  </strong>

                  <span className="block text-[11px] font-bold text-[#071b3b]">
                    Featured Projects
                  </span>

                  <small className="block text-[9px] text-slate-500 sm:text-[10px]">
                    Real-world applications
                  </small>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-xl border border-blue-200 bg-[#f7fbff] p-4 sm:p-5">
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
                    bg-[#0877f9]
                    text-lg
                    text-white
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-layers-fill"></i>
                </div>

                <div className="min-w-0">
                  <strong className="block text-[15px] font-black text-[#071b3b] sm:text-[16px]">
                    MERN Stack
                  </strong>

                  <span className="block text-[11px] font-bold text-[#071b3b]">
                    Focus
                  </span>

                  <small className="block text-[9px] text-slate-500 sm:text-[10px]">
                    Frontend to Backend
                  </small>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-xl border border-blue-200 bg-[#f7fbff] p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
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
                    bg-[#0877f9]
                    text-lg
                    text-white
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <div className="min-w-0">
                  <strong className="block text-[13px] font-black text-[#071b3b] sm:text-[14px]">
                    Frontend + Backend
                  </strong>

                  <span className="block text-[11px] font-bold text-[#071b3b]">
                    Complete Solutions
                  </span>

                  <small className="block text-[9px] text-slate-500 sm:text-[10px]">
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