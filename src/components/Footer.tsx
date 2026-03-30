import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Eyelight Publishing" className="h-10 mb-4 rounded" />
            <p className="text-sm opacity-60 leading-relaxed mb-4">
              Professional publishing services for authors, thought leaders, and experts worldwide.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:services@eyelightpublishing.com"
                className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <Mail size={14} />
                services@eyelightpublishing.com
              </a>
              <a
                href="tel:+2349085181361"
                className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                <Phone size={14} />
                +234 908 518 1361
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-80">About</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How We Work</a></li>
              <li><a href="#testimonials" className="hover:opacity-100 transition-opacity">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest opacity-80">Services</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>Ghostwriting</li>
              <li>Editing & Proofreading</li>
              <li>Cover Design</li>
              <li>Publishing & Distribution</li>
              <li>Book Marketing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Eyelight Publishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
