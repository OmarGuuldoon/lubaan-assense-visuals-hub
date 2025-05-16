
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative h-screen flex items-center", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Lubaan Assense fragrance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6 leading-tight">
            Discover the essence of luxury
          </h1>
          <p className="text-xl text-white/90 mb-8 font-light">
            Expertly crafted fragrances for discerning individuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-white text-brand-black hover:bg-brand-cream border-none rounded-none px-8 py-6" 
              size="lg"
              asChild
            >
              <Link to="/shop">Discover Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
