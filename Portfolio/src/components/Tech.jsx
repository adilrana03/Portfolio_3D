import { technologies } from "../constants";
import SectionHeading from "./SectionHeading";

const Pill = ({ technology, clone = false }) => (
  <div
    data-clone={clone ? "true" : "false"}
    className="flex items-center gap-3 rounded-full border border-white/10 bg-[#12141a] px-4 py-2.5"
  >
    {technology.icon ? (
      <img
        src={technology.icon}
        alt=""
        width="24"
        height="24"
        className="h-6 w-6 object-contain"
      />
    ) : (
      <span className="h-2 w-2 rounded-full bg-[#c6f54e]" aria-hidden="true" />
    )}
    <span className="whitespace-nowrap text-sm text-[#f3f0e8]">{technology.name}</span>
  </div>
);

const Tech = () => {
  return (
    <section className="border-y border-white/10 py-20 md:py-24" aria-label="Tech stack">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="03" eyebrow="Stack" title="Tools I reach for." />
      </div>

      <div className="marquee mt-12">
        <div className="marquee-track">
          {technologies.map((technology) => (
            <Pill key={technology.name} technology={technology} />
          ))}
          {technologies.map((technology) => (
            <Pill key={`${technology.name}-clone`} technology={technology} clone />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
