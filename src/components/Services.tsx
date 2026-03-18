import {
  PenTool,
  FileEdit,
  Search,
  LayoutGrid,
  Hash,
  Printer,
  Globe,
  Palette,
  Users,
  Megaphone,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    title: "Book Writing",
    description: "Professional ghostwriting services to bring your story to life with expert narrative craft.",
    price: "From $0.10/word",
    icon: PenTool,
    features: ["Full manuscript writing", "Research & development", "Revisions included"],
  },
  {
    title: "Book Editing",
    description: "Comprehensive developmental and line editing to elevate your manuscript to publishing standard.",
    price: "From $0.03/word",
    icon: FileEdit,
    features: ["Developmental editing", "Line-by-line refinement", "Detailed feedback report"],
  },
  {
    title: "Book Proofreading",
    description: "Meticulous proofreading to catch every typo, grammatical error, and formatting inconsistency.",
    price: "From $0.015/word",
    icon: Search,
    features: ["Grammar & spelling check", "Punctuation review", "Consistency verification"],
  },
  {
    title: "Formatting & Layout",
    description: "Professional interior layout design for print and digital formats that meets industry standards.",
    price: "From $150",
    icon: LayoutGrid,
    features: ["Print-ready formatting", "eBook conversion", "Table of contents & headers"],
  },
  {
    title: "ISBN Procurement",
    description: "We handle the full ISBN registration process so your book is ready for distribution worldwide.",
    price: "$99",
    icon: Hash,
    features: ["ISBN registration", "Barcode generation", "Metadata setup"],
  },
  {
    title: "Book Printing",
    description: "High-quality offset and print-on-demand services with premium paper and binding options.",
    price: "From $3/copy",
    icon: Printer,
    features: ["Paperback & hardcover", "Premium paper options", "Bulk discounts available"],
  },
  {
    title: "Digital Publishing",
    description: "Distribute your book across major digital platforms including Amazon, Apple Books, and more.",
    price: "From $199",
    icon: Globe,
    features: ["Multi-platform distribution", "DRM protection", "Sales reporting"],
  },
  {
    title: "Book Cover Design",
    description: "Eye-catching, genre-appropriate cover designs that sell your book before readers open it.",
    price: "$200",
    icon: Palette,
    features: ["Custom illustration", "Front, spine & back", "Print & digital versions"],
  },
  {
    title: "Author Branding",
    description: "Build your author platform with professional social media management and brand identity.",
    price: "From $300/mo",
    icon: Users,
    features: ["Social media management", "Brand identity design", "Content calendar"],
  },
  {
    title: "Book Marketing",
    description: "Strategic marketing plans to maximize your book's visibility and drive sales from day one.",
    price: "From $500",
    icon: Megaphone,
    features: ["Launch strategy", "PR & media outreach", "Ad campaign management"],
  },
];

const Services = () => {
  const { toast } = useToast();

  const handleAdd = (title: string) => {
    toast({
      title: "Service Added",
      description: `${title} has been added. Contact us at services@eyelightpublishing.com to finalize your order.`,
    });
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to publish
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select the services you need. Each comes with transparent pricing and professional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onAdd={() => handleAdd(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
