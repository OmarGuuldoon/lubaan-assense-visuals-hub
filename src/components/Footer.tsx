import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-brand-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-brand-black">Lubaan Essense</h3>
            <p className="text-brand-gray max-w-xs">
            Trusted Worldwide for Authentic Frankincense.
Experience purity and tradition in every shipment.
We ship three times a year and offer free samples delivered anywhere in the world.
Contact us today – your journey with true frankincense starts here.
            </p>
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
