const Hero = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Eyelight Publishing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Your manuscript,{" "}
            <span className="text-accent">professionally realized.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Select your services, set your specifications, and let our editors and designers 
            handle the rest. Transparent pricing. Professional standards. No consultation needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Browse Services
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-border transition-colors text-sm"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
