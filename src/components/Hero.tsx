import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative h-screen flex items-center", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lubaan_background.jpeg" 
          alt="Frankincense and Essential Oils" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6 leading-tight">
            Lubaan Essence
          </h1>
          <p className="text-xl text-white/90 mb-4 font-light">
            Natural – Pure – Effective
          </p>
          <p className="text-lg text-white/80 mb-8 font-light">
            A versatile natural product with a wide range of uses in health, beauty, and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-white text-brand-black hover:bg-brand-cream border-none rounded-none px-8 py-6" 
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("featured-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
