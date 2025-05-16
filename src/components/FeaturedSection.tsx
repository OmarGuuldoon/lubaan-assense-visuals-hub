
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Essential Oil Blend",
      description: "A harmonious blend of therapeutic oils for relaxation and wellness.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "Natural Face Cream",
      description: "Hydrating and nourishing cream made from natural ingredients.",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      id: 3,
      name: "Organic Soap Bar",
      description: "Hand-crafted organic soap with soothing properties.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-brand-brown mb-4">Featured Products</h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">
            Discover our most loved natural products, crafted with care and respect for nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-brand-olive hover:bg-brand-green text-white px-8 py-6 rounded">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
