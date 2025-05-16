
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="About Lubaan Assense" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium">
              About Us
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-serif text-brand-brown mb-6">Our Journey</h2>
              <p className="text-brand-brown/80 mb-4">
                Lubaan Assense began as a small passion project in a kitchen, with the goal of creating truly natural products that work in harmony with our bodies and the environment.
              </p>
              <p className="text-brand-brown/80 mb-4">
                Founded in 2015, we've grown from hand-mixing small batches to crafting a comprehensive line of sustainable wellness products, but our core values remain the same.
              </p>
              <p className="text-brand-brown/80 mb-4">
                We believe that what we put on our bodies should be as carefully considered as what we put in them. Every ingredient is selected with purpose, every formula crafted with intention.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-brand-brown mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded shadow-sm">
                <h3 className="text-xl font-serif text-brand-brown mb-4">Sustainability</h3>
                <p className="text-brand-brown/80">
                  We source ingredients ethically and use eco-friendly packaging to minimize our environmental footprint.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded shadow-sm">
                <h3 className="text-xl font-serif text-brand-brown mb-4">Transparency</h3>
                <p className="text-brand-brown/80">
                  We believe you deserve to know exactly what's in our products and where those ingredients come from.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded shadow-sm">
                <h3 className="text-xl font-serif text-brand-brown mb-4">Efficacy</h3>
                <p className="text-brand-brown/80">
                  Natural doesn't mean ineffective. Our products are rigorously tested to ensure they perform as promised.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-brand-brown mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Team member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-serif text-brand-brown">Sarah Johnson</h3>
                <p className="text-brand-brown/70">Founder & Formulator</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Team member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-serif text-brand-brown">Michael Chen</h3>
                <p className="text-brand-brown/70">Sustainability Director</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Team member" 
                    className="w-40 h-40 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-serif text-brand-brown">Leila Martinez</h3>
                <p className="text-brand-brown/70">Product Development</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
