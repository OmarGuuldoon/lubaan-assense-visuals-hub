
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-brand-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl font-serif font-medium text-brand-black">Lubaan Assense</h3>
            <p className="text-brand-gray max-w-xs">
              Artisanal fragrances crafted with precision and passion, designed to evoke emotion and create lasting impressions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-medium text-brand-black">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-brand-gray hover:text-brand-black transition-colors text-sm">Home</Link>
              <Link to="/shop" className="text-brand-gray hover:text-brand-black transition-colors text-sm">Shop</Link>
              <Link to="/about" className="text-brand-gray hover:text-brand-black transition-colors text-sm">About</Link>
              <Link to="/contact" className="text-brand-gray hover:text-brand-black transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-medium text-brand-black">Contact</h4>
            <address className="not-italic text-brand-gray space-y-2 text-sm">
              <p>Email: info@lubaanessence.com</p>
              <p>Phone: +41763039073</p>
              <p>Gitschenstrasse 2</p>
              <p>6460 Altdorf</p>
              <p>Switzerland</p>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-beige mt-12 pt-8 text-xs text-brand-gray text-center max-w-5xl mx-auto">
          <p>© {new Date().getFullYear()} Lubaan Assense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
