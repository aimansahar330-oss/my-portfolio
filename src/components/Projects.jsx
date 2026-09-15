import pharmago from "../assets/pharmago.png";
import taskmanager from "../assets/taskmanager.png";

const projects = [
  {
    image: pharmago,
    title: "PharmaGo — Pharmacy E-commerce Platform",
    description:
      "A full-stack pharmacy e-commerce platform with product search, cart, checkout, order tracking, authentication and a complete admin dashboard for managing products, categories and orders.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
    ],
    liveDemo: "https://pharmago-self.vercel.app/",
    sourceCode: "https://github.com/aimansahar330-oss/pharmago",
  },

  {
    image: taskmanager,
    title: "Task Management App",
    description:
      "A full-stack productivity application with secure authentication, protected routes and complete task management features including creating, updating and deleting tasks.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    liveDemo: "https://task-managment-app-puce.vercel.app/",
    sourceCode:
      "https://github.com/aimansahar330-oss/Task-managment-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden

        !bg-white

        py-14

        transition-colors
        duration-500

        dark:!bg-[#06111f]

        sm:py-16
        lg:py-20
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -right-28
          top-20
          h-[280px]
          w-[280px]
          rounded-full

          !bg-blue-100/50

          blur-[90px]

          dark:!bg-[#0877f9]/10
        "
      />

      <div
        className="
          absolute
          -left-24
          bottom-10
          h-[240px]
          w-[240px]
          rounded-full

          !bg-cyan-100/40

          blur-[80px]

          dark:!bg-cyan-400/[0.06]
        "
      />

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
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

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
                PROJECTS
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                m-0

                text-[28px]
                font-black
                tracking-[-0.04em]

                !text-[#071b3b]

                dark:!text-[#f8fafc]

                sm:text-[34px]
                lg:text-[38px]
              "
            >
              Featured
              <span
                className="
                  !text-[#0877f9]
                  dark:!text-[#58c7ff]
                "
              >
                {" "}
                Projects
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              m-0
              max-w-[430px]

              text-[11px]
              leading-5

              !text-slate-500

              dark:!text-slate-400

              sm:text-[12px]
              sm:leading-6

              lg:text-right
            "
          >
            A selection of full-stack projects where I turned ideas into
            responsive and functional web applications.
          </p>
        </div>

        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:gap-6

            lg:grid-cols-2
          "
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden

                rounded-[22px]
                border

                !border-blue-100
                !bg-white

                shadow-[0_8px_30px_rgba(7,27,59,0.05)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:!border-blue-300
                hover:shadow-[0_20px_45px_rgba(8,119,249,0.10)]

                dark:!border-white/10
                dark:!bg-[#0c1b2e]
                dark:shadow-[0_10px_35px_rgba(0,0,0,.20)]

                dark:hover:!border-[#58c7ff]/30
                dark:hover:shadow-[0_20px_45px_rgba(8,119,249,.09)]
              "
            >
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden

                  !bg-[#eef6ff]

                  p-3

                  dark:!bg-[#081827]

                  sm:p-4
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    absolute
                    left-6
                    top-6
                    z-20

                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-lg
                    border

                    !border-white/60
                    !bg-[#071b3b]/85

                    text-[10px]
                    font-black

                    !text-white

                    shadow-lg
                    backdrop-blur

                    dark:!border-white/10
                    dark:!bg-[#06111f]/90
                  "
                >
                  0{index + 1}
                </span>

                {/* LIVE BADGE */}
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    z-20

                    inline-flex
                    items-center
                    gap-2

                    rounded-full
                    border

                    !border-white/70
                    !bg-white/90

                    px-3
                    py-1.5

                    text-[8.5px]
                    font-bold

                    !text-[#071b3b]

                    shadow-sm
                    backdrop-blur

                    dark:!border-white/10
                    dark:!bg-[#0b1829]/90
                    dark:!text-white
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                  LIVE
                </span>

                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-[210px]
                      w-full

                      object-cover
                      object-top

                      transition-transform
                      duration-500

                      group-hover:scale-[1.025]

                      sm:h-[270px]
                      md:h-[300px]
                      lg:h-[270px]
                      xl:h-[300px]
                    "
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* DETAILS */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  flex-1
                  flex-col

                  p-5

                  sm:p-6
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    m-0

                    text-[16px]
                    font-black
                    leading-6

                    !text-[#071b3b]

                    dark:!text-white

                    sm:text-[17px]
                    lg:text-[18px]
                  "
                >
                  {project.title}
                </h3>

                {/* LINE */}
                <div
                  className="
                    mt-3
                    h-[2px]
                    w-9
                    rounded-full

                    !bg-[#0877f9]

                    dark:!bg-[#58c7ff]
                  "
                />

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3

                    text-[11px]
                    leading-5

                    !text-slate-600

                    dark:!text-slate-400

                    sm:text-[12px]
                    sm:leading-6
                  "
                >
                  {project.description}
                </p>

                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-lg
                        border

                        !border-blue-100
                        !bg-[#f4f9ff]

                        px-2.5
                        py-1.5

                        text-[9px]
                        font-bold

                        !text-[#0877f9]

                        transition-colors
                        duration-300

                        dark:!border-white/10
                        dark:!bg-[#0877f9]/10
                        dark:!text-[#70ceff]

                        sm:text-[9.5px]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ================================================= */}
                {/* BUTTONS */}
                {/* ================================================= */}

                <div
                  className="
                    mt-auto
                    grid
                    grid-cols-1
                    gap-2.5
                    pt-6

                    min-[430px]:grid-cols-2
                  "
                >
                  {/* ================================================= */}
                  {/* LIVE DEMO */}
                  {/* ================================================= */}

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group/live

                      inline-flex
                      items-center
                      justify-center
                      gap-2.5

                      rounded-xl

                      bg-gradient-to-r
                      from-[#0877f9]
                      to-[#0757c8]

                      px-4
                      py-3

                      text-[10px]
                      font-bold

                      !text-white
                      !no-underline

                      shadow-[0_8px_20px_rgba(8,119,249,.18)]

                      transition
                      duration-300

                      hover:-translate-y-0.5
                      hover:!text-white
                      hover:!no-underline
                      hover:shadow-[0_12px_25px_rgba(8,119,249,.25)]

                      dark:from-[#1494ff]
                      dark:to-[#0877f9]
                      dark:shadow-[0_8px_22px_rgba(8,119,249,.14)]

                      sm:text-[11px]
                    "
                  >
                    <i className="bi bi-box-arrow-up-right" />

                    Live Demo

                    <i
                      className="
                        bi
                        bi-arrow-right

                        transition
                        duration-300

                        group-hover/live:translate-x-1
                      "
                    />
                  </a>

                  {/* ================================================= */}
                  {/* SOURCE CODE */}
                  {/* ================================================= */}

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group/code

                      inline-flex
                      items-center
                      justify-center
                      gap-2.5

                      rounded-xl
                      border

                      !border-[#071b3b]/20
                      !bg-white

                      px-4
                      py-3

                      text-[10px]
                      font-bold

                      !text-[#071b3b]
                      !no-underline

                      shadow-sm

                      transition
                      duration-300

                      hover:-translate-y-0.5
                      hover:!border-[#071b3b]
                      hover:!bg-[#071b3b]
                      hover:!text-white
                      hover:!no-underline

                      dark:!border-white/15
                      dark:!bg-[#17263a]
                      dark:!text-white
                      dark:shadow-none

                      dark:hover:!border-white
                      dark:hover:!bg-white
                      dark:hover:!text-[#071b3b]

                      sm:text-[11px]
                    "
                  >
                    <i className="bi bi-github text-[14px]" />

                    Source Code

                    <i
                      className="
                        bi
                        bi-arrow-right

                        transition
                        duration-300

                        group-hover/code:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>

              {/* ================================================= */}
              {/* BOTTOM HOVER LINE */}
              {/* ================================================= */}

              <div
                className="
                  h-[3px]
                  w-0

                  bg-gradient-to-r
                  from-[#0877f9]
                  to-cyan-400

                  transition-all
                  duration-500

                  group-hover:w-full

                  dark:from-[#58c7ff]
                  dark:to-cyan-400
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;