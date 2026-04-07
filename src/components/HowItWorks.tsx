const steps = [
  {
    num: "01",
    title: "Editorial Work",
    desc: "7–10 business days",
  },
  {
    num: "02",
    title: "Interior Layout",
    desc: "3–5 business days",
  },
  {
    num: "03",
    title: "Cover Design",
    desc: "7 business days",
  },
  {
    num: "04",
    title: "Review & Approval",
    desc: "3–5 business days",
  },
  {
    num: "05",
    title: "Production",
    desc: "7–10 business days",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We <span className="text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We follow a structured process to ensure quality at every stage.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-[22px] top-12 w-px h-[calc(100%-2rem)] bg-border" />
              )}
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
