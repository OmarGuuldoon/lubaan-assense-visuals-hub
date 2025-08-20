
import React from "react";
import { Button } from "./ui/button";

const StorySection = () => {
  return (
    <section id="story-section" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img
              src="/accra.jpeg"
              alt="Hoo Frakincense story"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-brand-black mb-6">Quality & Origin</h2>
            <p className="text-brand-gray mb-4 leading-relaxed">
              Certified organic
            </p>
            <p className="text-brand-gray mb-4 leading-relaxed">
              Fairly traded
            </p>
            <p className="text-brand-gray mb-8 leading-relaxed">
              Genuine Somali Meydi (Frankincense)
            </p>
            <h3 className="text-2xl font-serif text-brand-black mb-4">Examples include:</h3>
            <p className="text-brand-gray mb-8 leading-relaxed">
              Use in natural medicine, skincare and cosmetic products, and as incense in traditional practices.
            </p>
            <Button 
              className="bg-transparent hover:bg-brand-black text-brand-black hover:text-white border-2 border-brand-black rounded-none"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("featured-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
