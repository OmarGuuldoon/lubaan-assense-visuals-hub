import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "These fragrances evoke such powerful memories. I've never found scents with such depth and longevity.",
      // author: "Sarah J.",
      location: "New York"
    },
    {
      id: 2,
      quote: "The attention to detail in each fragrance tells a story. I appreciate the craftsmanship behind every bottle.",
      // author: "Michael T.",
      location: "California"
    },
    {
      id: 3,
      quote: "Lubaan Assense has become my signature scent. People always ask what I'm wearing.",
      // author: "Emma R.",
      location: "London"
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-serif text-brand-black mb-16 text-center">Client Testimonials</h2>
        
        <div className="space-y-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="text-center"
            >
              <blockquote className="text-brand-dark text-xl md:text-2xl font-serif mb-8 max-w-3xl mx-auto">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                {/* <p className="font-medium text-brand-black">{testimonial.author}</p> */}
                <p className="text-brand-gray text-sm">{testimonial.location}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
