import { useRef, useState } from "react";

import { experiences } from "../constants";
import SectionHeading from "./SectionHeading";

const stampFor = (date) => {
  if (date.includes("Present")) return "NOW";
  return date.match(/\d{4}/)?.[0] ?? "";
};

const Experience = () => {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const role = experiences[active];

  const select = (index, shouldFocus = false) => {
    const next = (index + experiences.length) % experiences.length;
    setActive(next);
    if (shouldFocus) tabs.current[next]?.focus();
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(active + 1, true);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(active - 1, true);
    }
  };

  return (
    <section id="work" className="scroll-mt-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="02" eyebrow="Experience" title="Where the work happened.">
          Three roles. Open one to read what that chapter was.
        </SectionHeading>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label="Roles"
            aria-orientation="vertical"
            className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
            onKeyDown={onKeyDown}
          >
            {experiences.map((experience, index) => {
              const selected = index === active;
              return (
                <button
                  key={`${experience.title}-${experience.date}`}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`role-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="role-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  className={`min-w-[220px] shrink-0 rounded-2xl border px-4 py-4 text-left transition duration-200 lg:min-w-0 ${
                    selected
                      ? "border-[#c6f54e]/70 bg-[#c6f54e]/10 shadow-[0_0_32px_-16px_rgba(198,245,78,0.9)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-name text-xs tracking-[0.22em] text-[#c6f54e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {experience.date.includes("Present") ? (
                      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#c6f54e]">
                        <span className="now-dot" aria-hidden="true" />
                        Now
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-3 block font-display text-xl font-bold tracking-tight text-[#f3f0e8]">
                    {experience.title}
                  </span>
                  <span className="mt-1 block text-sm text-[#9c988f]">
                    {experience.company_name || experience.date}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="role-panel"
            aria-labelledby={`role-tab-${active}`}
            key={active}
            className="work-panel relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <p
              className="pointer-events-none absolute -right-1 -top-4 font-name text-[7rem] font-extrabold leading-none text-[#c6f54e]/10 md:text-[9rem]"
              aria-hidden="true"
            >
              {stampFor(role.date)}
            </p>

            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9c988f]">
                {String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#f3f0e8] md:text-5xl">
                {role.title}
              </h3>
              {role.company_name ? (
                <p className="mt-2 text-lg text-[#d9d4c8]">{role.company_name}</p>
              ) : null}
              <p className="mt-2 font-name text-sm tracking-[0.14em] text-[#c6f54e]">{role.date}</p>

              <ul className="mt-8 space-y-3">
                {role.points.map((point, index) => (
                  <li
                    key={point}
                    className="work-point rounded-xl border border-transparent px-4 py-3 text-sm leading-relaxed text-[#d9d4c8]"
                    style={{ animationDelay: `${0.08 + index * 0.06}s` }}
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#9c988f]">
                  Use the list, or the arrows
                </p>
                <button
                  type="button"
                  onClick={() => select(active + 1)}
                  className="link-arrow text-sm font-medium text-[#f3f0e8] transition hover:text-[#c6f54e]"
                >
                  Next role
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
