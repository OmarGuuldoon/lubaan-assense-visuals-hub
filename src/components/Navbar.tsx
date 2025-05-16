
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif text-brand-black">Lubaan Assense</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider">Home</Link>
          <Link to="/shop" className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider">Shop</Link>
          <Link to="/about" className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider">About</Link>
          <Link to="/contact" className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider">Contact</Link>
          <Link to="/cart" className="text-brand-black hover:text-brand-gray transition-colors text-sm uppercase tracking-wider">Cart</Link>
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
            <span className="text-2xl font-serif text-brand-black">Lubaan Assense</span>
            <button 
              onClick={toggleMobileMenu} 
              className="text-brand-black"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl text-brand-black hover:text-brand-gray transition-colors">Home</Link>
            <Link to="/shop" className="text-xl text-brand-black hover:text-brand-gray transition-colors">Shop</Link>
            <Link to="/about" className="text-xl text-brand-black hover:text-brand-gray transition-colors">About</Link>
            <Link to="/contact" className="text-xl text-brand-black hover:text-brand-gray transition-colors">Contact</Link>
            <Link to="/cart" className="text-xl text-brand-black hover:text-brand-gray transition-colors">Cart</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
