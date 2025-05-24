
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <img 
            src="logo.png" 
            alt="Lubaan Essence Logo" 
            className="h-16"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#top" 
            className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("story-section");
            }}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("footer-section");
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMobileMenu}
          className="md:hidden text-brand-black"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="logo.png" 
              alt="Lubaan Essence Logo" 
              className="h-12"
            />
            <button 
              onClick={toggleMobileMenu} 
              className="text-brand-black"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a 
              href="#top" 
              className="text-xl text-brand-black hover:text-brand-gray transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-xl text-brand-black hover:text-brand-gray transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("story-section");
              }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-xl text-brand-black hover:text-brand-gray transition-colors"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-xl text-brand-black hover:text-brand-gray transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("footer-section");
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
