
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  slug?: string;
  className?: string;
}

const ProductCard = ({ name, description, price, image, slug = "#", className }: ProductCardProps) => {
  return (
    <Link to={`/product/${slug}`} className={cn("group block", className)}>
      <div className="overflow-hidden mb-4 aspect-[3/4]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="font-serif text-xl text-brand-black">{name}</h3>
        <p className="text-brand-gray mt-1 mb-2 text-sm">{description}</p>
        <p className="font-medium text-brand-black">{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
