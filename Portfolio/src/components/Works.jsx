import { useRef, useState } from "react";

import { projects } from "../constants";
import SectionHeading from "./SectionHeading";

const hrefFor = (url) => {
  if (!url) return "#";
  return url.startsWith("http") ? url : `https://${url}`;
};

const Works = () => {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const project = projects[active];

  const select = (index, shouldFocus = false) => {
    const next = (index + projects.length) % projects.length;
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
    <section id="projects" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading index="04" eyebrow="Projects" title="Selected work.">
          Pick a project. The preview, code, and live link stay in one place.
        </SectionHeading>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-6">
          <div
            role="tablist"
            aria-label="Projects"
            aria-orientation="vertical"
            className="project-list flex gap-2 overflow-x-auto pb-1 lg:max-h-[340px] lg:flex-col lg:overflow-y-auto lg:pr-1"
            onKeyDown={onKeyDown}
          >
            {projects.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.name}
                  ref={(node) => {
                    tabs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`project-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="project-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  className={`flex min-w-[148px] shrink-0 items-center gap-3 rounded-xl border px-3 py-2 text-left transition duration-200 lg:min-w-0 ${
                    selected
                      ? "border-[#c6f54e]/70 bg-[#c6f54e]/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <span className="font-name text-[11px] tracking-[0.16em] text-[#c6f54e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate text-sm text-[#f3f0e8]">{item.name}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="project-panel"
            aria-labelledby={`project-tab-${active}`}
            key={project.name}
            className="work-panel overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            <img
              src={project.image}
              alt={`${project.name} preview`}
              width="960"
              height="420"
              decoding="async"
              className="h-36 w-full object-cover object-top sm:h-44"
            />
            <div className="p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#f3f0e8]">
                  {project.name}
                </h3>
                <span className="font-name text-xs tracking-[0.16em] text-[#9c988f]">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#9c988f]">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={`${project.name}-${tag}`}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#9c988f]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-5 text-sm font-medium">
                <a
                  href={hrefFor(project.source_code_link)}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow text-[#f3f0e8] transition hover:text-[#c6f54e]"
                >
                  Code
                </a>
                <a
                  href={hrefFor(project.live_demo_link)}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow text-[#f3f0e8] transition hover:text-[#c6f54e]"
                >
                  Live
                </a>
                <button
                  type="button"
                  onClick={() => select(active + 1)}
                  className="link-arrow ml-auto text-[#f3f0e8] transition hover:text-[#c6f54e]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
