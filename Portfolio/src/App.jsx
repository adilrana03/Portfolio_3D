import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative isolate min-h-screen bg-[#08090c] font-sans text-[#f3f0e8]">
        <div className="aurora" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </main>
        <footer className="border-t border-white/10 px-5 py-8 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#9c988f] sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-base font-semibold text-[#f3f0e8]">Adil Rana</p>
            <p>Full-stack developer</p>
            <a className="transition hover:text-[#f3f0e8]" href="mailto:adilrana2014@gmail.com">
              adilrana2014@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
