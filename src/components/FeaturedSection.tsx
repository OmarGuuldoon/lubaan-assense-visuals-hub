
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Amber Serenade",
      description: "Warm & Sensual",
      price: "$68.00",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      slug: "amber-serenade"
    },
    {
      id: 2,
      name: "Velvet Woods",
      description: "Rich & Mysterious",
      price: "$72.00",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      slug: "velvet-woods"
    },
    {
      id: 3,
      name: "Ocean Whisper",
      description: "Fresh & Airy",
      price: "$65.00",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      slug: "ocean-whisper"
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-brand-black mb-4">Best Sellers</h2>
          <p className="text-brand-gray max-w-md mx-auto">
            Our most coveted fragrances, cherished for their distinctive character and lasting impression.
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
