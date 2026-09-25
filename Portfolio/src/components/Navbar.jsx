import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const match = navLinks.find((link) => link.id === visible.target.id);
        if (match) setActive(match.title);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const select = (title) => {
    setActive(title);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-[#08090c]/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#c6f54e]/40 font-display text-xs font-bold text-[#c6f54e]">
            AR
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-[#f3f0e8]">
            Adil Rana
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => select(link.title)}
              className={`text-sm transition-colors ${
                active === link.title ? "text-[#f3f0e8]" : "text-[#9c988f] hover:text-[#f3f0e8]"
              }`}
            >
              {link.title}
            </a>
          ))}
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#c6f54e]/40 px-4 py-2 text-sm font-medium text-[#c6f54e] transition hover:bg-[#c6f54e] hover:text-[#08090c]"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-[#f3f0e8] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-current transition duration-200 ${
                open ? "top-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition duration-200 ${
                open ? "top-1/2 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => select(link.title)}
                  className="block rounded-xl px-3 py-3 text-[#f3f0e8]"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block rounded-full border border-[#c6f54e]/40 px-4 py-3 text-center text-sm text-[#c6f54e]"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
