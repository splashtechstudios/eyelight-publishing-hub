const steps = [
  {
    num: "01",
    title: "Editorial Services",
    desc: "7–10 business days. May vary depending on manuscript length and complexity.",
  },
  {
    num: "02",
    title: "Interior Layout Design",
    desc: "3–5 business days for professional formatting and typesetting.",
  },
  {
    num: "03",
    title: "Book Cover Design",
    desc: "7 business days. Includes feedback and revision round.",
  },
  {
    num: "04",
    title: "Client Review & Approval",
    desc: "3–5 business days. Subject to author response time on previews.",
  },
  {
    num: "05",
    title: "Book Production / Printing",
    desc: "7–10 business days for high-quality printing and binding.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            How We Operate
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Realistic <span className="text-accent">Timeframes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each timeline we give to our clients is realistic and considerable. Here's what to expect.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[22px] top-12 w-px h-[calc(100%-2rem)] bg-border" />
              )}
              {/* Number circle */}
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold z-10">
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
