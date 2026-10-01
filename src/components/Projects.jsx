import pharmago from "../assets/pharmago.png";
import taskmanager from "../assets/taskmanager.png";
import honeyglow from "../assets/honeyglow.png";

const projects = [
  {
    image: pharmago,
    title: "PharmaGo — Pharmacy E-commerce Platform",
    description:
      "A full-stack pharmacy e-commerce platform designed to manage products, customers and orders through a clean and practical shopping experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
    ],
    liveUrl: "https://pharmago-self.vercel.app/",
    githubUrl: "https://github.com/aimansahar330-oss",
  },

  {
    image: taskmanager,
    title: "Task Management App",
    description:
      "A productivity-focused web application that helps users create, organize and manage tasks through authentication and a responsive dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    liveUrl: "https://task-managment-app-puce.vercel.app/",
    githubUrl: "https://github.com/aimansahar330-oss",
  },

  {
    image: honeyglow,
    title: "HoneyGlow — Skincare E-commerce Website",
    description:
      "A modern skincare shopping experience focused on elegant visuals, clear product presentation and a smooth responsive interface designed to make browsing feel simple and premium.",
    tech: [
      "React",
      "Tailwind CSS",
      "Responsive UI",
      "E-commerce",
    ],
    liveUrl: "https://my-portfolio-drab-five-17.vercel.app/",
    githubUrl: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        bg-white
        py-12
        transition-colors
        duration-300

        dark:bg-[#07111f]

        sm:py-14
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          max-w-[1320px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* SMALL HEADING */}
        {/* ================================================= */}

        <p
          className="
            m-0
            text-[10px]
            font-black
            tracking-[0.14em]
            text-[#0877f9]

            dark:text-[#58c7ff]

            sm:text-[11px]
          "
        >
          PROJECTS
        </p>

        {/* ================================================= */}
        {/* MAIN HEADING */}
        {/* ================================================= */}

        <div className="mt-1 flex items-end gap-5">

          <h2
            className="
              m-0
              shrink-0
              text-[26px]
              font-black
              leading-tight
              text-[#071b3b]

              dark:text-white

              sm:text-[30px]
              lg:text-[32px]
            "
          >
            Featured Projects
          </h2>

          <div
            className="
              mb-2
              hidden
              h-[2px]
              flex-1
              bg-[#071b3b]

              dark:bg-white/20

              lg:block
            "
          />

          <p
            className="
              mb-1
              hidden
              whitespace-nowrap
              text-[11px]
              text-slate-500

              dark:text-slate-400

              lg:block
            "
          >
            A closer look at the work I've built.
          </p>

        </div>

        {/* ================================================= */}
        {/* MOBILE DESCRIPTION */}
        {/* ================================================= */}

        <p
          className="
            mt-2
            text-[11px]
            leading-5
            text-slate-500

            dark:text-slate-400

            lg:hidden
          "
        >
          A closer look at the work I've built with practical ideas,
          modern interfaces and real-world functionality.
        </p>

        {/* ================================================= */}
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-5

            sm:gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-blue-200
                bg-white
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-xl
                hover:shadow-blue-100/60

                dark:border-white/10
                dark:bg-[#0d1b2d]
                dark:shadow-none

                dark:hover:border-[#58c7ff]/40
                dark:hover:shadow-[#0877f9]/10
              "
            >

              {/* ================================================= */}
              {/* PROJECT IMAGE */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#eef6ff]
                  p-3

                  dark:bg-[#111f32]

                  sm:p-4
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    bg-white

                    dark:bg-[#17263a]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      aspect-[16/9]
                      h-auto
                      w-full
                      object-contain
                      object-center

                      transition-transform
                      duration-500

                      group-hover:scale-[1.02]
                    "
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* PROJECT DETAILS */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  p-4

                  sm:p-5
                  lg:p-5
                "
              >

                {/* TITLE */}

                <h3
                  className="
                    m-0
                    text-[15px]
                    font-black
                    leading-6
                    text-[#071b3b]

                    dark:text-white

                    sm:text-[16px]
                  "
                >
                  {project.title}
                </h3>

                {/* SMALL LINE */}

                <div
                  className="
                    mt-2
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[#0877f9]

                    dark:bg-[#58c7ff]
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    text-[11.5px]
                    leading-5
                    text-slate-600

                    dark:text-slate-300

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
                        rounded-md
                        bg-[#e3f1ff]
                        px-2.5
                        py-1.5
                        text-[9px]
                        font-bold
                        text-[#0877f9]

                        dark:bg-[#0877f9]/15
                        dark:text-[#70c8ff]

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
                    flex
                    flex-col
                    gap-2
                    pt-5

                    min-[420px]:flex-row
                  "
                >

                  {/* LIVE DEMO */}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#071b3b]
                      px-3
                      py-2.5
                      text-[10px]
                      font-bold
                      !text-white
                      no-underline

                      transition
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#0877f9]

                      dark:bg-[#0877f9]
                      dark:hover:bg-[#2196ff]
                    "
                  >
                    <i className="bi bi-box-arrow-up-right" />

                    Live Demo

                    <i className="bi bi-arrow-right" />
                  </a>

                  {/* GITHUB */}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-[#071b3b]
                        bg-transparent
                        px-3
                        py-2.5
                        text-[10px]
                        font-bold
                        !text-[#071b3b]
                        no-underline

                        transition
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#071b3b]
                        hover:!text-white

                        dark:border-white/20
                        dark:!text-white

                        dark:hover:border-white
                        dark:hover:bg-white
                        dark:hover:!text-[#071b3b]
                      "
                    >
                      <i className="bi bi-github" />

                      Source Code
                    </a>
                  )}

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;