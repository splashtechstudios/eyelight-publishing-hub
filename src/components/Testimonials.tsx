import { Quote } from "lucide-react";
import nurseSugarImg from "@/assets/testimonial-nurse-sugar.png";
import toluImg from "@/assets/testimonial-tolu.png";
import nihinImg from "@/assets/testimonial-nihin-alabi.png";
import elizabethImg from "@/assets/testimonial-elizabeth.png";

const testimonials = [
  {
    quote:
      "Worked on my GuideBook of over 400 pages and not a single complaint afterwards. No regrets working together!",
    name: "Nurse Sugar",
    location: "Texas, USA",
    image: nurseSugarImg,
  },
  {
    quote:
      "Grace has done outstanding proofreading and editing work for my clients' books. She is professional, dependable, and pays great attention to detail. I highly recommend her services.",
    name: "Tolu Arogundade",
    location: "US, Business Consultant",
    image: toluImg,
  },
  {
    quote:
      "From editing the manuscript to securing the ISBN, managing the entire publishing process step-by-step, and overseeing the printing of the physical copies, every stage was handled efficiently and with great attention to detail.",
    name: "Nihin Alabi",
    location: "United States of America",
    image: nihinImg,
  },
  {
    quote:
      "Not only did she help me organize my manuscript but she guided me to actually finish it. Now my book is published, and I feel confident sharing it with the world.",
    name: "Author Elizabeth",
    location: "Nigeria",
    image: elizabethImg,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-accent rounded-full" /> Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Hear what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 lg:p-8 hover:shadow-card transition-shadow"
            >
              <Quote size={24} className="text-accent mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
