
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Frankincense",
      description: "Premium Grade",
      price: "$68.00",
      image: "/lovable-uploads/c8a8a7dd-66fc-4de3-81e1-ea01f36c38aa.png",
      slug: "royal-frankincense"
    },
    {
      id: 2,
      name: "Golden Tears",
      description: "Pure & Natural",
      price: "$72.00",
      image: "/lovable-uploads/3a7aa7a1-7d15-4500-9c82-43188fe391c8.png",
      slug: "golden-tears"
    },
    {
      id: 3,
      name: "Amber Essence",
      description: "Rich & Aromatic",
      price: "$65.00",
      image: "/lovable-uploads/6ee18e55-6705-4c82-a7c7-1689d3448ba8.png",
      slug: "amber-essence"
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-brand-black mb-4">Best Sellers</h2>
          <p className="text-brand-gray max-w-md mx-auto">
            Our most coveted frankincense resins, cherished for their distinctive aroma and natural healing properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-transparent hover:bg-brand-black text-brand-black hover:text-white border-2 border-brand-black rounded-none px-8 py-6"
            asChild
          >
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
