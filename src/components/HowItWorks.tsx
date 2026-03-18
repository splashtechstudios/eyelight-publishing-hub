import { MousePointer, FileText, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Choose Services",
    description: "Browse our catalog and select the services you need for your project.",
  },
  {
    icon: FileText,
    title: "Share Details",
    description: "Provide your manuscript details, word count, and any specific requirements.",
  },
  {
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Review your order summary with transparent pricing and complete payment.",
  },
  {
    icon: Rocket,
    title: "We Deliver",
    description: "Our professionals get to work and deliver results within the agreed timeline.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Four simple steps to publish
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No lengthy consultations. No hidden fees. Just a clear path from manuscript to published book.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <step.icon size={24} />
              </div>
              <div className="font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase">
                Step {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
