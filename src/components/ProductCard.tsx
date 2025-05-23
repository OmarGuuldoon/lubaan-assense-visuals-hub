
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  slug?: string;
  className?: string;
}

const ProductCard = ({ name, description, image, slug = "#", className }: ProductCardProps) => {
  return (
    <Link to={`/product/${slug}`} className={cn("group block", className)}>
      <div className="overflow-hidden mb-4 rounded-md bg-white p-4 shadow-sm">
        <AspectRatio ratio={1} className="bg-white">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-xl text-brand-black">{name}</h3>
        <p className="text-brand-gray mt-1 mb-2 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
