const skillGroups = [
  {
    number: "01",
    icon: "bi-display-fill",
    title: "Frontend Development",
    description:
      "Responsive interfaces with clean layouts, smooth interactions and modern styling.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },

  {
    number: "02",
    icon: "bi-server",
    title: "Backend Development",
    description:
      "Reliable server-side logic, authentication and scalable application APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },

  {
    number: "03",
    icon: "bi-database-fill",
    title: "Database",
    description:
      "Structured and reliable data management for modern web applications.",
    skills: [
      "MongoDB",
      "PostgreSQL",
    ],
  },

  {
    number: "04",
    icon: "bi-tools",
    title: "Tools & Workflow",
    description:
      "Development, testing, deployment and collaboration tools used in real projects.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "cPanel",
      "Figma",
    ],
  },

  {
    number: "05",
    icon: "bi-people-fill",
    title: "Professional Skills",
    description:
      "Professional strengths that help me solve problems, collaborate effectively and keep improving.",
    skills: [
      "Problem Solving",
      "Team Work",
      "Communication",
      "Quick Learner",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#f8fbff]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          absolute
          -right-32
          top-10
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-200/30
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          -left-32
          bottom-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-cyan-100/40
          blur-[90px]
        "
      />

      {/* MAIN CONTAINER */}
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
                bg-white
                px-3
                py-1.5
                shadow-sm
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#0877f9]" />

              <span
                className="
                  text-[9px]
                  font-black
                  tracking-[0.18em]
                  text-[#0877f9]
                  sm:text-[10px]
                "
              >
                MY SKILLS
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
              Technologies I Use To
              <span className="text-[#0877f9]"> Build</span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
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
            A practical toolkit for building responsive interfaces, reliable
            backends and complete web applications from development to
            deployment.
          </p>
        </div>

        {/* ================= BENTO GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:grid-cols-6
          "
        >
          {skillGroups.map((group, index) => {
            let cardLayout = "";

            if (index === 0) {
              cardLayout = "lg:col-span-4";
            } else if (index === 1) {
              cardLayout = "lg:col-span-2";
            } else if (index === 2) {
              cardLayout = "lg:col-span-2";
            } else if (index === 3) {
              cardLayout = "lg:col-span-4";
            } else {
              cardLayout = "md:col-span-2 lg:col-span-6";
            }

            return (
              <article
                key={group.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-blue-100
                  bg-white
                  p-5
                  shadow-[0_8px_30px_rgba(7,27,59,0.04)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-[0_18px_40px_rgba(8,119,249,0.10)]

                  sm:p-6

                  ${cardLayout}
                `}
              >
                {/* BACKGROUND CIRCLE */}
                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-[#0877f9]/5
                    transition-all
                    duration-500

                    group-hover:scale-150
                    group-hover:bg-[#0877f9]/10
                  "
                />

                {/* CARD NUMBER */}
                <span
                  className="
                    absolute
                    right-5
                    top-4
                    text-[34px]
                    font-black
                    tracking-[-0.06em]
                    text-[#071b3b]/[0.045]
                    sm:text-[40px]
                  "
                >
                  {group.number}
                </span>

                {/* ====================================== */}
                {/* PROFESSIONAL SKILLS SPECIAL CARD */}
                {/* ====================================== */}

                {index === 4 ? (
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      gap-5

                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      lg:gap-12
                    "
                  >
                    {/* LEFT CONTENT */}
                    <div className="max-w-[440px]">
                      <div className="flex items-center gap-3.5">
                        {/* ICON */}
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-[#0877f9]
                            to-[#0756c7]
                            text-[17px]
                            text-white
                            shadow-[0_8px_20px_rgba(8,119,249,.20)]
                            transition
                            duration-300

                            group-hover:-rotate-3
                            group-hover:scale-105
                          "
                        >
                          <i className={`bi ${group.icon}`} />
                        </div>

                        {/* TITLE */}
                        <div>
                          <h3
                            className="
                              m-0
                              text-[14px]
                              font-black
                              leading-5
                              text-[#071b3b]
                              sm:text-[15px]
                            "
                          >
                            {group.title}
                          </h3>

                          <div className="mt-2 h-[2px] w-7 rounded-full bg-[#0877f9]" />
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-4
                          text-[10.5px]
                          leading-5
                          text-slate-500
                          sm:text-[11.5px]
                        "
                      >
                        {group.description}
                      </p>
                    </div>

                    {/* PROFESSIONAL SKILLS */}
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2

                        lg:max-w-[540px]
                        lg:justify-end
                      "
                    >
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-blue-100
                            bg-[#f5faff]
                            px-3.5
                            py-2
                            text-[9.5px]
                            font-bold
                            text-[#29405f]
                            transition-all
                            duration-300

                            hover:border-[#0877f9]
                            hover:bg-white
                            hover:text-[#0877f9]

                            sm:text-[10.5px]
                          "
                        >
                          <i className="bi bi-check2-circle text-[#0877f9]" />

                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* ====================================== */}
                    {/* NORMAL CARDS */}
                    {/* ====================================== */}

                    {/* HEADER */}
                    <div className="relative flex items-start gap-3.5">
                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-[#0877f9]
                          to-[#0756c7]
                          text-[17px]
                          text-white
                          shadow-[0_8px_20px_rgba(8,119,249,.20)]
                          transition
                          duration-300

                          group-hover:-rotate-3
                          group-hover:scale-105
                        "
                      >
                        <i className={`bi ${group.icon}`} />
                      </div>

                      {/* TITLE */}
                      <div className="min-w-0 pt-0.5">
                        <h3
                          className="
                            m-0
                            text-[14px]
                            font-black
                            leading-5
                            text-[#071b3b]

                            sm:text-[15px]

                            lg:text-[14px]
                            xl:text-[15px]
                          "
                        >
                          {group.title}
                        </h3>

                        <div className="mt-2 h-[2px] w-7 rounded-full bg-[#0877f9]" />
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        relative
                        mt-4
                        max-w-[530px]
                        text-[10.5px]
                        leading-5
                        text-slate-500
                        sm:text-[11.5px]
                      "
                    >
                      {group.description}
                    </p>

                    {/* SKILLS */}
                    <div
                      className="
                        relative
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-blue-100
                            bg-[#f5faff]
                            px-2.5
                            py-1.5
                            text-[9px]
                            font-bold
                            text-[#29405f]
                            transition-all
                            duration-300

                            group-hover:border-blue-200
                            group-hover:bg-white

                            sm:text-[10px]
                          "
                        >
                          <span className="h-[4px] w-[4px] rounded-full bg-[#0877f9]" />

                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* BOTTOM HOVER LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-[#0877f9]
                    to-cyan-400
                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>

        {/* ================= BOTTOM BOX ================= */}

        <div
          className="
            mt-5
            flex
            flex-col
            items-start
            justify-between
            gap-4
            rounded-2xl
            border
            border-blue-100
            bg-white/70
            px-5
            py-4
            shadow-sm
            backdrop-blur

            sm:flex-row
            sm:items-center
          "
        >
          {/* LEFT */}
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
                bg-blue-50
                text-[#0877f9]
              "
            >
              <i className="bi bi-code-slash" />
            </div>

            <div>
              <p
                className="
                  m-0
                  text-[10px]
                  font-black
                  text-[#071b3b]
                  sm:text-[11px]
                "
              >
                Always Improving
              </p>

              <span className="text-[9px] text-slate-500">
                Learning better ways to build useful web products.
              </span>
            </div>
          </div>

          {/* PROJECT LINK */}
          <a
            href="#projects"
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-bold
              !text-[#0877f9]
              !no-underline
              transition

              hover:gap-3
              hover:!no-underline
            "
          >
            See My Projects

            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;