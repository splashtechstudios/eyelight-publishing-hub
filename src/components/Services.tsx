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

export const services = [
  {
    id: "ghostwriting",
    title: "Ghostwriting",
    description:
      "We'll help you shape your raw ideas, experiences, and expertise into a powerful book your readers will connect with.",
    price: "₦1,200,000 / $900",
    priceNote: "per 10,000 words (≈50 pages)",
    amount: 900,
    icon: PenTool,
    features: [
      "In-depth conversations to capture your voice",
      "Detailed outline before writing begins",
      "Chapter-by-chapter review & revisions",
    ],
  },
  {
    id: "dev-editing",
    title: "Developmental Editing",
    description:
      "We'll take your manuscript beyond 'well-written' and turn it into a book that flows effortlessly from start to finish.",
    price: "₦800,000 / $600",
    priceNote: "per 10,000 words",
    amount: 600,
    icon: FileEdit,
    features: [
      "Structure & chapter arrangement",
      "Argument & narrative strengthening",
      "Tone & style refinement",
    ],
  },
  {
    id: "proofreading",
    title: "Proofreading",
    description:
      "Final reading before printing or publishing — checking for typos, formatting errors, and layout issues.",
    price: "₦7,000 / $5",
    priceNote: "per page (A4 post-formatting)",
    amount: 5,
    icon: Search,
    features: [
      "Typo & grammar correction",
      "Formatting error checks",
      "Layout consistency review",
    ],
  },
  {
    id: "formatting",
    title: "Book Formatting & Typesetting",
    description:
      "Professional interior design so your book is visually attractive and easy to read, for both print and digital.",
    price: "₦1,400 / $1",
    priceNote: "per page",
    amount: 1,
    icon: LayoutGrid,
    features: [
      "Professional fonts & spacing",
      "Page numbering & chapter headings",
      "Print & digital compatibility",
    ],
  },
  {
    id: "cover-design",
    title: "Book Cover Design",
    description:
      "Front, spine, and back cover design with professional typography, imagery, and ISBN barcode placement.",
    price: "₦140,000 / $100",
    priceNote: "flat rate",
    amount: 100,
    icon: Palette,
    features: [
      "Front, spine & back cover",
      "Blurb & author bio placement",
      "Competitive, genre-appropriate design",
    ],
  },
  {
    id: "isbn",
    title: "ISBN & Copyright Registration",
    description:
      "Your book ISBN will be registered so it can be tracked and sold worldwide, plus copyright protection.",
    price: "Free",
    priceNote: "T&C applies",
    amount: 0,
    icon: Hash,
    features: [
      "ISBN registration",
      "Copyright protection",
      "Publishing details setup",
    ],
  },
  {
    id: "printing",
    title: "Printing & Binding",
    description:
      "High-quality paper and binding options with proof copy review before full printing.",
    price: "Custom Quote",
    priceNote: "depends on size & quantity",
    amount: 0,
    icon: Printer,
    features: [
      "Paperback & hardcover options",
      "Proof copy review",
      "Bulk printing arrangements",
    ],
  },
  {
    id: "publishing",
    title: "Publishing & Distribution",
    description:
      "Uploading to Amazon KDP, Selar, and other platforms with retail price and distribution channel setup.",
    price: "₦60,000 / $49",
    priceNote: "flat rate",
    amount: 49,
    icon: Globe,
    features: [
      "Amazon KDP & Selar upload",
      "Retail price setup",
      "Distribution channel config",
    ],
  },
  {
    id: "branding",
    title: "Author Branding",
    description:
      "Build your author platform with professional social media management and brand identity.",
    price: "From $300/mo",
    priceNote: "monthly retainer",
    amount: 300,
    icon: Users,
    features: [
      "Social media management",
      "Brand identity design",
      "Content calendar & strategy",
    ],
  },
  {
    id: "marketing",
    title: "Book Marketing Strategy",
    description:
      "Launch strategy, social media campaigns, and promotions to build excitement around your book.",
    price: "Free / Add-On",
    priceNote: "with 5+ services",
    amount: 0,
    icon: Megaphone,
    features: [
      "Launch strategy & promotions",
      "30 social media content pieces",
      "Campaign management",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-2">
            <span className="w-1 h-1 bg-accent rounded-full" /> Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services <span className="text-accent">Offered</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Each service is designed to take your book from concept to completion
            with professional quality at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
