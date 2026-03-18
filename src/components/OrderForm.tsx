import { useState, useEffect } from "react";
import { services } from "./Services";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookTitle: "",
    wordCount: "",
    genre: "",
    details: "",
  });

  // Listen for service selection from ServiceCard
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setSelectedService(e.detail);
      // Auto-scroll is handled by the ServiceCard
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      toast({ title: "Please select a service", variant: "destructive" });
      return;
    }
    if (!form.fullName || !form.email) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    // For services with price, trigger Paystack
    if (selectedServiceData && selectedServiceData.amount > 0) {
      initiatePaystack();
    } else {
      // For free/custom services, just submit the form
      toast({
        title: "Request Submitted!",
        description: `We'll get back to you at ${form.email} with details about ${selectedServiceData?.title}.`,
      });
    }
  };

  const initiatePaystack = () => {
    const paystackKey = (window as any).__PAYSTACK_PUBLIC_KEY__;
    if (!paystackKey) {
      toast({
        title: "Payment Setup Required",
        description: "Paystack integration is being configured. Please contact services@eyelightpublishing.com to complete your order.",
      });
      return;
    }

    const handler = (window as any).PaystackPop?.setup({
      key: paystackKey,
      email: form.email,
      amount: (selectedServiceData?.amount || 0) * 100, // Paystack uses kobo/cents
      currency: "USD",
      ref: `EYE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      metadata: {
        custom_fields: [
          { display_name: "Service", variable_name: "service", value: selectedServiceData?.title },
          { display_name: "Book Title", variable_name: "book_title", value: form.bookTitle },
          { display_name: "Full Name", variable_name: "full_name", value: form.fullName },
          { display_name: "Phone", variable_name: "phone", value: form.phone },
          { display_name: "Word Count", variable_name: "word_count", value: form.wordCount },
          { display_name: "Genre", variable_name: "genre", value: form.genre },
          { display_name: "Details", variable_name: "details", value: form.details },
        ],
      },
      callback: (response: any) => {
        toast({
          title: "Payment Successful! 🎉",
          description: `Reference: ${response.reference}. We'll be in touch shortly.`,
        });
      },
      onClose: () => {
        toast({ title: "Payment cancelled", description: "You can try again anytime." });
      },
    });
    handler?.openIframe();
  };

  const inputClasses =
    "w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";

  return (
    <section id="order" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Order a <span className="text-accent">Service</span>
            </h2>
            <p className="text-muted-foreground">
              Fill in your project details and proceed to payment. We'll begin work
              within 24 hours of receiving your order.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-card space-y-5"
          >
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Select Service *
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className={inputClasses}
              >
                <option value="">Choose a service...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} — {s.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Book Title
                </label>
                <input
                  type="text"
                  name="bookTitle"
                  value={form.bookTitle}
                  onChange={handleChange}
                  placeholder="My Book Title"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Estimated Word Count
                </label>
                <input
                  type="text"
                  name="wordCount"
                  value={form.wordCount}
                  onChange={handleChange}
                  placeholder="e.g. 30,000"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Genre / Category
                </label>
                <input
                  type="text"
                  name="genre"
                  value={form.genre}
                  onChange={handleChange}
                  placeholder="e.g. Self-Help, Memoir"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Project Details
              </label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project, any specific requirements, deadlines, or preferences..."
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Price Summary */}
            {selectedServiceData && (
              <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {selectedServiceData.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {selectedServiceData.priceNote}
                  </div>
                </div>
                <div className="text-lg font-bold font-mono text-accent">
                  {selectedServiceData.price}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {selectedServiceData && selectedServiceData.amount > 0
                ? "Proceed to Payment"
                : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
