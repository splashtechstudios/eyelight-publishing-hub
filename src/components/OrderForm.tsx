import { useState, useEffect } from "react";
import { services } from "./Services";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, ArrowLeft } from "lucide-react";

const OrderForm = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    details: "",
  });

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setSelectedService(e.detail);
    };
    window.addEventListener("select-service", handler as EventListener);
    return () => window.removeEventListener("select-service", handler as EventListener);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      toast({ title: "Please select a service", variant: "destructive" });
      return;
    }
    if (!form.fullName.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    if (!form.details.trim()) {
      toast({ title: "Please tell us about your project", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://eyelightpubmails.onrender.com/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          projectType: selectedServiceData?.title || selectedService,
          projectDescription: form.details.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      toast({
        title: "Inquiry Sent! ✉️",
        description: "We'll review your inquiry and get back to you within 24-48 hours.",
      });

      setForm({ fullName: "", email: "", details: "" });
      setSelectedService("");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via WhatsApp or email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";

  return (
    <section id="order" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <a
            href="#services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Services
          </a>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Let's Discuss Your <span className="text-accent">Project</span>
          </h2>
          {selectedServiceData ? (
            <p className="text-muted-foreground">
              You're interested in{" "}
              <span className="font-semibold text-foreground">
                {selectedServiceData.title}
              </span>
              . Fill out the form below and we'll get back to you within 24-48 hours.
            </p>
          ) : (
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24-48 hours.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    maxLength={100}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    maxLength={255}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Service Interested In <span className="text-accent">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">
                  Tell Me About Your Project <span className="text-accent">*</span>
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={6}
                  maxLength={2000}
                  placeholder="What are you working on? What stage is your project? What are your goals and timeline?"
                  className={inputClasses + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Prefer Direct Contact?
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/2349085181361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <MessageCircle size={16} className="text-accent shrink-0" />
                    Message on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:services@eyelightpublishing.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail size={16} className="text-accent shrink-0" />
                    services@eyelightpublishing.com
                  </a>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-accent shrink-0">1.</span>
                  We'll review your inquiry within 24-48 hours
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-accent shrink-0">2.</span>
                  We'll schedule a discovery call to discuss your project
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-accent shrink-0">3.</span>
                  We'll send a tailored proposal with scope and timeline
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-accent shrink-0">4.</span>
                  Once agreed, we begin the collaboration
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
