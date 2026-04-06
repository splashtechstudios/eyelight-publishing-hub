import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <OrderForm />
      <CTA />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
