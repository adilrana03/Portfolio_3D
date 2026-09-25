const SectionHeading = ({ index, eyebrow, title, children }) => {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#9c988f]">
        <span className="font-display text-sm tracking-normal text-[#c6f54e]">{index}</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#f3f0e8]">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 max-w-xl text-base leading-relaxed text-[#9c988f] md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeading;
