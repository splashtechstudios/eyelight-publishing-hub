import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Write Your Own{" "}
              <span className="text-accent">Success Story?</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8 max-w-lg">
              Whether you need a ghostwriter, an editor, or full end-to-end publishing
              support, we're here to help you bring your book to life. Your breakthrough
              starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Work With Us <ArrowRight size={16} />
              </a>
              <a
                href="mailto:services@eyelightpublishing.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary-foreground/5 transition-colors"
              >
                Send an Email
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src={heroImage}
              alt="Start your publishing journey"
              className="w-72 xl:w-80 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
