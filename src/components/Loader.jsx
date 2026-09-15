const Loader = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#031630]
        via-[#052a59]
        to-[#0877f9]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-300/10 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        {/* LOGO */}
        <div className="loader-logo relative flex h-[92px] w-[92px] items-center justify-center rounded-[26px] border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,.25)] backdrop-blur-xl">
          <div className="absolute inset-[5px] rounded-[22px] border border-white/10" />

          <span className="relative flex items-baseline text-[38px] font-black tracking-[-0.12em]">
            <span className="text-white">A</span>
            <span className="ml-[2px] text-cyan-300">S</span>
          </span>
        </div>

        {/* NAME */}
        <h1 className="mt-6 text-[18px] font-black tracking-[0.08em] text-white">
          AIMAN <span className="text-cyan-300">SAHAR</span>
        </h1>

        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-100/70">
          Full Stack Web Developer
        </p>

        {/* LOADING BAR */}
        <div className="mt-7 h-[3px] w-[180px] overflow-hidden rounded-full bg-white/15">
          <div className="loader-bar h-full rounded-full bg-gradient-to-r from-cyan-300 via-white to-blue-300" />
        </div>

        {/* LOADING TEXT */}
        <div className="mt-4 flex items-center gap-2">
          <span className="loader-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
          <span className="loader-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
          <span className="loader-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />

          <span className="ml-1 text-[9px] font-semibold tracking-[0.12em] text-blue-100">
            LOADING EXPERIENCE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;