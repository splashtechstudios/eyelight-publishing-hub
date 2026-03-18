import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="About Eyelight Publishing"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl object-cover shadow-card"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full" /> About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
              Eyelight <span className="text-accent">Publishing</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a team of writers, ghostwriters, editors, and publishing coaches who believe 
              every leader, expert, and visionary has a book in them — one that can shape lives, 
              influence industries, and leave a lasting legacy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Over the years, we've helped over 335 authors and thought leaders take their ideas 
              from scattered thoughts to finished, published works. Our approach is simple: clarity, 
              structure, and a commitment to finishing what we start together.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity mb-8"
            >
              Explore Our Services <ArrowRight size={16} />
            </a>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">335+ Projects</div>
                  <div className="text-xs text-muted-foreground">Books published worldwide</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Global Reach</div>
                  <div className="text-xs text-muted-foreground">Clients across continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
