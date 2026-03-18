import { Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Eyelight Publishing" className="h-10 mb-4 rounded bg-primary-foreground p-1" />
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Professional publishing services for aspiring and established authors. 
              From manuscript to market, we handle every step.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Book Writing</li>
              <li>Book Editing & Proofreading</li>
              <li>Book Cover Design</li>
              <li>Digital Publishing</li>
              <li>Book Marketing Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Get in Touch</h4>
            <a
              href="mailto:services@eyelightpublishing.com"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail size={16} />
              services@eyelightpublishing.com
            </a>
            <p className="text-sm opacity-50 mt-8">
              © {new Date().getFullYear()} Eyelight Publishing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
