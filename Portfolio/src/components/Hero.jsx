const Hero = () => {
  return (
    <section className="relative overflow-x-clip">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-8 md:px-8 md:pt-36">
        <div className="min-w-0">
          <p className="caret text-[11px] uppercase tracking-[0.32em] text-[#9c988f]">
            Full-stack developer
          </p>

          <h1 className="hero-name mt-6 font-name text-[clamp(3.25rem,11vw,6.6rem)] font-extrabold leading-[0.86] tracking-[-0.03em] text-[#f3f0e8]">
            <span className="hero-name-glow" aria-hidden="true" />
            <span className="block">Adil</span>
            <span className="block">
              <span className="stroke-name">Rana</span>
              <span className="text-[#c6f54e]">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-[34ch] text-lg leading-relaxed text-[#d9d4c8] sm:max-w-md sm:text-xl">
            I build web products from the interface through to the API — calm to use, and still fast after launch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-[#c6f54e] px-6 py-3 text-sm font-semibold text-[#08090c] transition hover:bg-white"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#f3f0e8] transition hover:border-[#c6f54e]/70 hover:text-[#c6f54e]"
            >
              Say hello
            </a>
          </div>

          <ul className="mt-10 flex max-w-full flex-col gap-2 text-sm text-[#9c988f] sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li>React & Next.js</li>
            <li>Node & Express</li>
            <li>Artfi · Present</li>
          </ul>
        </div>

        <div className="signal" aria-hidden="true">
          <svg viewBox="0 0 480 480" className="h-auto w-full">
            <defs>
              <path
                id="signal-ring"
                d="M240 240 m-188 0 a188 188 0 1 1 376 0 a188 188 0 1 1 -376 0"
              />
              <filter id="dot-glow" x="-300%" y="-300%" width="700%" height="700%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="240" cy="240" r="214" fill="none" stroke="rgba(243,240,232,0.08)" />
            <line x1="36" y1="240" x2="132" y2="240" stroke="rgba(243,240,232,0.18)" />
            <line x1="348" y1="240" x2="444" y2="240" stroke="rgba(243,240,232,0.18)" />
            <line x1="240" y1="36" x2="240" y2="132" stroke="rgba(243,240,232,0.18)" />
            <line x1="240" y1="348" x2="240" y2="444" stroke="rgba(243,240,232,0.18)" />

            <g className="signal-ticks">
              <circle
                cx="240"
                cy="240"
                r="156"
                fill="none"
                stroke="#c6f54e"
                strokeOpacity="0.55"
                strokeWidth="6"
                strokeDasharray="1.5 16"
                strokeLinecap="round"
              />
            </g>

            <circle cx="240" cy="240" r="118" fill="none" stroke="rgba(198,245,78,0.22)" strokeWidth="10" />
            <circle cx="240" cy="240" r="108" fill="rgba(198,245,78,0.05)" stroke="rgba(198,245,78,0.7)" />

            <g className="signal-spin">
              <text
                fill="#9c988f"
                fontFamily="Manrope, sans-serif"
                fontSize="13"
                letterSpacing="4"
              >
                <textPath href="#signal-ring">
                  REACT · NEXT.JS · NODE · EXPRESS · TYPESCRIPT · MONGODB · TAILWIND ·
                </textPath>
              </text>
              <circle cx="240" cy="52" r="5" fill="#c6f54e" filter="url(#dot-glow)" />
            </g>
          </svg>

          <div className="signal-core">
            <div>
              <p className="signal-mark font-name text-6xl font-extrabold leading-none tracking-[-0.04em] text-[#f3f0e8] md:text-7xl">
                AR
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-[#9c988f]">
                Senior · Artfi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
