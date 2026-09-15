const services = [
  {
    number: "01",
    icon: "bi-display",
    title: "Frontend Development",
    description:
      "Modern and responsive interfaces built with clean layouts, smooth interactions and user-focused design.",
  },

  {
    number: "02",
    icon: "bi-layers-fill",
    title: "Full Stack Web Apps",
    description:
      "Complete web applications with frontend, backend, authentication, database integration and deployment.",
  },

  {
    number: "03",
    icon: "bi-braces",
    title: "REST API Development",
    description:
      "Secure and scalable APIs with authentication, validation and reliable database connectivity.",
  },

  {
    number: "04",
    icon: "bi-phone",
    title: "Responsive UI Design",
    description:
      "Mobile-first interfaces that stay clean, usable and consistent across every screen size.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden

        !bg-[#f8fbff]

        py-14

        transition-colors
        duration-500

        dark:!bg-[#071321]

        sm:py-16
        lg:py-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          -right-28
          top-16
          h-[280px]
          w-[280px]
          rounded-full

          !bg-blue-200/30

          blur-[90px]

          dark:!bg-[#0877f9]/10
        "
      />

      <div
        className="
          absolute
          -left-24
          bottom-0
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
        {/* HEADER */}
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
                !bg-white

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
                SERVICES
              </span>
            </div>

            {/* HEADING */}
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
              What I Can
              <span
                className="
                  !text-[#0877f9]
                  dark:!text-[#58c7ff]
                "
              >
                {" "}
                Build
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
            From responsive interfaces to complete full-stack applications, I
            build practical web solutions that are ready to use and easy to
            grow.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group
                relative
                flex
                min-h-[220px]
                flex-col
                overflow-hidden

                rounded-[20px]
                border

                !border-blue-100
                !bg-white

                p-5

                shadow-[0_8px_30px_rgba(7,27,59,0.04)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:!border-blue-300
                hover:shadow-[0_18px_40px_rgba(8,119,249,0.10)]

                dark:!border-white/10
                dark:!bg-[#0c1b2e]
                dark:shadow-[0_10px_35px_rgba(0,0,0,.18)]

                dark:hover:!border-[#58c7ff]/30
                dark:hover:shadow-[0_18px_45px_rgba(8,119,249,.10)]

                sm:p-6
              "
            >
              {/* DECORATIVE CIRCLE */}
              <div
                className="
                  absolute
                  -right-12
                  -top-12

                  h-28
                  w-28

                  rounded-full

                  !bg-[#0877f9]/5

                  transition-all
                  duration-500

                  group-hover:scale-150
                  group-hover:!bg-[#0877f9]/10

                  dark:!bg-[#58c7ff]/[0.04]
                  dark:group-hover:!bg-[#58c7ff]/[0.08]
                "
              />

              {/* NUMBER */}
              <span
                className="
                  absolute
                  right-5
                  top-4

                  text-[34px]
                  font-black
                  tracking-[-0.06em]

                  !text-[#071b3b]/[0.045]

                  dark:!text-white/[0.045]

                  sm:text-[40px]
                "
              >
                {service.number}
              </span>

              {/* ICON */}
              <div
                className="
                  relative

                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl

                  bg-gradient-to-br
                  from-[#0877f9]
                  to-[#0756c7]

                  text-[19px]
                  !text-white

                  shadow-[0_8px_20px_rgba(8,119,249,.20)]

                  transition
                  duration-300

                  group-hover:-rotate-3
                  group-hover:scale-105

                  dark:from-[#1494ff]
                  dark:to-[#0877f9]
                  dark:shadow-[0_8px_25px_rgba(8,119,249,.16)]
                "
              >
                <i className={`bi ${service.icon}`} />
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  mt-5

                  text-[14px]
                  font-black
                  leading-5

                  !text-[#071b3b]

                  dark:!text-white

                  sm:text-[15px]
                "
              >
                {service.title}
              </h3>

              {/* SMALL LINE */}
              <div
                className="
                  relative
                  mt-2

                  h-[2px]
                  w-8

                  rounded-full

                  !bg-[#0877f9]

                  dark:!bg-[#58c7ff]
                "
              />

              {/* DESCRIPTION */}
              <p
                className="
                  relative
                  mt-4
                  flex-1

                  text-[10.5px]
                  leading-5

                  !text-slate-500

                  dark:!text-slate-400

                  sm:text-[11.5px]
                "
              >
                {service.description}
              </p>

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

export default Services;