
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "These products have transformed my self-care routine. Natural, effective, and beautifully made.",
      author: "Sarah J.",
      location: "New York"
    },
    {
      id: 2,
      quote: "I appreciate the commitment to sustainability and the quality of every product I've tried.",
      author: "Michael T.",
      location: "California"
    },
    {
      id: 3,
      quote: "The essential oils have become an integral part of my daily wellness practice. Truly exceptional.",
      author: "Emma R.",
      location: "London"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-brand-brown mb-12 text-center">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-brand-beige/50 p-8 rounded flex flex-col"
            >
              <blockquote className="text-brand-brown/80 mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <p className="font-medium text-brand-brown">{testimonial.author}</p>
                <p className="text-brand-brown/60 text-sm">{testimonial.location}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
