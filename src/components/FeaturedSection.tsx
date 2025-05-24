
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Boswellia Carterii",
      description: "Premium Grade",
      image: "/lovable-uploads/c8a8a7dd-66fc-4de3-81e1-ea01f36c38aa.png",
      slug: "boswellia-carterii"
    },
    {
      id: 2,
      name: "Boswellia Frereana",
      description: "Pure & Natural",
<<<<<<< HEAD
      image: "/lovable-uploads/6ee18e55-6705-4c82-a7c7-1689d3448ba8.png",
=======
      image: "/accra.jpeg",
>>>>>>> 09a3e78e8d47afe2cf825a2913a1043ecf9d2ea9
      slug: "boswellia-frereana"
    },
    {
      id: 3,
      name: "Boswellia Sacra",
      description: "Rich & Aromatic",
      image: "/lovable-uploads/c8a8a7dd-66fc-4de3-81e1-ea01f36c38aa.png",
      slug: "boswellia-sacra"
    }
  ];

  return (
    <section id="featured-section" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-serif text-brand-black mb-4">Our Products</h2>
          <p className="text-brand-gray max-w-lg mx-auto">
            We specialize in Boswellia carterii, Boswellia frereana, and Boswellia sacra. Our frankincense is harvested in its purest raw form to ensure unmatched quality and potency in every batch.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-brand-black mb-4">Service</h3>
            <p className="text-brand-gray mb-8">
              LUBAAN ESSENCE is a leading exporter of premium raw frankincense, delivering the finest resins from the heart of Somalia to essential oil producers, cosmetic companies, perfumers, and beyond.
            </p>
          </div>
          <Button 
            className="bg-transparent hover:bg-brand-black text-brand-black hover:text-white border-2 border-brand-black rounded-none px-8 py-6"
          >
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("footer-section");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Contact Us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;

