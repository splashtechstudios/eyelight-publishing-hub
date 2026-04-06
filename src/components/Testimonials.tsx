import { Quote, Star } from "lucide-react";
import nurseSugarImg from "@/assets/testimonial-nurse-sugar.png";
import toluImg from "@/assets/testimonial-tolu.png";
import nihinImg from "@/assets/testimonial-nihin-alabi.png";
import elizabethImg from "@/assets/testimonial-elizabeth.png";
import lillyImg from "@/assets/testimonial-author-lilly.png";
import apostleFemiImg from "@/assets/testimonial-apostle-femi.webp";

const featuredTestimonial = {
  quote:
    "Grace didn't just write my book — she captured my voice, my heart, and my message in a way I never thought possible. Working with Eyelight Publishing was a divine experience. From start to finish, the professionalism, attention to detail, and genuine care for the project exceeded all my expectations. I wholeheartedly endorse their work.",
  name: "Apostle Femi Lazarus",
  location: "Lagos, Nigeria",
  image: apostleFemiImg,
};

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
    image: nihinImg,
  },
  {
    quote:
      "From editing the manuscript to securing the ISBN, managing the entire publishing process step-by-step, and overseeing the printing of the physical copies, every stage was handled efficiently and with great attention to detail.",
    name: "Nihin Alabi",
    location: "United States of America",
    image: elizabethImg,
  },
  {
    quote:
      "Not only did she help me organize my manuscript but she guided me to actually finish it. Now my book is published, and I feel confident sharing it with the world.",
    name: "Author Elizabeth",
    location: "Nigeria",
    image: toluImg,
  },
  {
    quote:
      "In the process of working with her, she became my friend. A great soul to the core and excellent professional communication. 10/10 recommended!",
    name: "Author Lilly",
    location: "United States of America",
    image: lillyImg,
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

        {/* Featured Testimonial */}
        <div className="mb-10 bg-primary rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            <div className="lg:col-span-2 relative">
              <img
                src={featuredTestimonial.image}
                alt={featuredTestimonial.name}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base lg:text-lg text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{featuredTestimonial.quote}"
              </p>
              <div>
                <div className="text-base font-bold text-primary-foreground">
                  {featuredTestimonial.name}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {featuredTestimonial.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Testimonials */}
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
