
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-serif text-brand-brown font-semibold">Lubaan Assense</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-brand-brown hover:text-brand-olive transition-colors">Home</a>
          <a href="/shop" className="text-brand-brown hover:text-brand-olive transition-colors">Shop</a>
          <a href="/about" className="text-brand-brown hover:text-brand-olive transition-colors">About</a>
          <a href="/contact" className="text-brand-brown hover:text-brand-olive transition-colors">Contact</a>
          <a href="/cart" className="text-brand-brown hover:text-brand-olive transition-colors">Cart</a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMobileMenu}
          className="md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full bg-white transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-serif text-brand-brown font-semibold">Lubaan Assense</span>
            <button 
              onClick={toggleMobileMenu} 
              className="text-brand-brown"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="/" className="text-xl text-brand-brown hover:text-brand-olive transition-colors">Home</a>
            <a href="/shop" className="text-xl text-brand-brown hover:text-brand-olive transition-colors">Shop</a>
            <a href="/about" className="text-xl text-brand-brown hover:text-brand-olive transition-colors">About</a>
            <a href="/contact" className="text-xl text-brand-brown hover:text-brand-olive transition-colors">Contact</a>
            <a href="/cart" className="text-xl text-brand-brown hover:text-brand-olive transition-colors">Cart</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
