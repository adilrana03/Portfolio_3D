import { useState } from "react";
import emailjs from "@emailjs/browser";

import SectionHeading from "./SectionHeading";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setNote("The form is not connected yet. Email me at adilrana2014@gmail.com.");
      return;
    }

    setStatus("sending");
    setNote("");

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Adil Rana",
          from_email: form.email,
          to_email: "adilrana2014@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setStatus("sent");
          setNote("Thank you. I will get back to you as soon as I can.");
          setForm(initialForm);
        },
        () => {
          setStatus("error");
          setNote("Something went wrong. Please email adilrana2014@gmail.com.");
        }
      );
  };

  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading index="05" eyebrow="Contact" title="Tell me what you are building." />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <label className="block text-sm text-[#9c988f]">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#08090c] px-4 py-3 text-[#f3f0e8] outline-none transition placeholder:text-[#9c988f]/70 focus:border-[#c6f54e]/70"
              />
            </label>

            <label className="mt-5 block text-sm text-[#9c988f]">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#08090c] px-4 py-3 text-[#f3f0e8] outline-none transition placeholder:text-[#9c988f]/70 focus:border-[#c6f54e]/70"
              />
            </label>

            <label className="mt-5 block text-sm text-[#9c988f]">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="What should we make?"
                className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-[#08090c] px-4 py-3 text-[#f3f0e8] outline-none transition placeholder:text-[#9c988f]/70 focus:border-[#c6f54e]/70"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#c6f54e] px-6 py-3 text-sm font-semibold text-[#08090c] transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status === "error" ? "text-[#ffb4a8]" : "text-[#9c988f]"}`}
              >
                {note}
              </p>
            </div>
          </form>

          <aside className="flex flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-[#12141a] p-6 md:p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9c988f]">Direct</p>
              <a
                href="mailto:adilrana2014@gmail.com"
                className="mt-4 block break-all font-display text-3xl font-bold leading-tight tracking-tight text-[#f3f0e8] transition hover:text-[#c6f54e] md:text-4xl"
              >
                adilrana2014@gmail.com
              </a>
              <a
                href="https://github.com/adilrana03"
                target="_blank"
                rel="noreferrer"
                className="link-arrow mt-6 inline-flex text-sm font-medium text-[#f3f0e8] transition hover:text-[#c6f54e]"
              >
                GitHub
              </a>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#9c988f]">
              Comics, cricket, and a long focus session when the work deserves it.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
