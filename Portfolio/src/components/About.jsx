import { services } from "../constants";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="01" eyebrow="About" title="Comfortable in the long hours.">
          I am a developer who likes the work enough to stay with it. This portfolio is a record of what I have learned and shipped. If a project is worth it, I am fine with a long day — screen up, notes beside me, still typing. Away from the editor I read comics and play cricket.
        </SectionHeading>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#d9d4c8] md:text-lg">
          You know me a little now. Write if you want to build something. Communication is a two-way street.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#f3f0e8]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9c988f]">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
