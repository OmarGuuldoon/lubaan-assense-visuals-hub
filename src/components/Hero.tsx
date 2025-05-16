
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative h-[80vh] flex items-center", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Lubaan Assense natural products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium mb-6">
            Natural solutions for modern living
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Ethically sourced, sustainable products that nurture your wellbeing and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-brand-olive hover:bg-brand-green text-white border-none rounded px-8 py-6" 
              size="lg"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10 rounded px-8 py-6" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
