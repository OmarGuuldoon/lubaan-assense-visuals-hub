
const StorySection = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif text-brand-brown mb-6">Our Story</h2>
            <p className="text-brand-brown/80 mb-4">
              Lubaan Assense was founded with a simple mission: to create natural products that nurture both people and the planet.
            </p>
            <p className="text-brand-brown/80 mb-4">
              We believe in the power of nature to heal, protect, and enhance our wellbeing. Every product we create is the result of careful research, sustainable sourcing, and traditional techniques combined with modern innovation.
            </p>
            <p className="text-brand-brown/80">
              Our commitment to sustainability guides everything we do, from our ingredients to our packaging, ensuring that we leave a positive impact on the world around us.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Lubaan Assense story" 
              className="w-full h-80 md:h-96 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
