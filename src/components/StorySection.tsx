
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const StorySection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Lubaan Assense story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-brand-black mb-6">Our Story</h2>
            <p className="text-brand-gray mb-6 leading-relaxed">
              Founded on a passion for scent and its profound ability to evoke emotion, Lubaan Assense creates fragrances that tell stories and capture moments.
            </p>
            <p className="text-brand-gray mb-8 leading-relaxed">
              Each creation is meticulously crafted using the finest ingredients, honoring traditional perfumery techniques while embracing contemporary sensibilities.
            </p>
            <Button 
              className="bg-transparent hover:bg-brand-black text-brand-black hover:text-white border-2 border-brand-black rounded-none"
              asChild
            >
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
