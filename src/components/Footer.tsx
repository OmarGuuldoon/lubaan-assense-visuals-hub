
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-beige mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-brand-brown">Lubaan Assense</h3>
            <p className="text-brand-brown/80 max-w-xs">
              Natural, sustainable products crafted with care for your wellbeing and the environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-brand-brown hover:text-brand-olive transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-brand-brown hover:text-brand-olive transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-brand-brown">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/shop" className="text-brand-brown/80 hover:text-brand-olive transition-colors">Shop</a>
              <a href="/about" className="text-brand-brown/80 hover:text-brand-olive transition-colors">About Us</a>
              <a href="/sustainability" className="text-brand-brown/80 hover:text-brand-olive transition-colors">Sustainability</a>
              <a href="/contact" className="text-brand-brown/80 hover:text-brand-olive transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-brand-brown">Contact Us</h4>
            <address className="not-italic text-brand-brown/80 space-y-2">
              <p>123 Nature Way</p>
              <p>Organic City, EC 12345</p>
              <p className="pt-2">info@lubaanassense.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-brown/20 mt-8 pt-8 text-sm text-brand-brown/60 text-center">
          <p>© {new Date().getFullYear()} Lubaan Assense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
