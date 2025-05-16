
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  className?: string;
}

const ProductCard = ({ name, description, price, image, className }: ProductCardProps) => {
  return (
    <div className={cn("group", className)}>
      <div className="overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-xl text-brand-brown">{name}</h3>
      <p className="text-brand-brown/70 mt-1 mb-2 line-clamp-2">{description}</p>
      <p className="font-medium text-brand-olive">{price}</p>
    </div>
  );
};

export default ProductCard;
