
import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  slug?: string;
  className?: string;
}

const ProductCard = ({ name, description, image, slug = "#", className }: ProductCardProps) => {
  // Determine price based on product name
  const getPrice = (productName: string) => {
    if (productName.toLowerCase().includes("sacra")) return "100$/KG";
    if (productName.toLowerCase().includes("carterii")) return "120$/KG";
    if (productName.toLowerCase().includes("frereana")) return "150$/KG";
    return "";
  };

  return (
    <div className={cn("group block", className)}>
      <div className="overflow-hidden mb-4 rounded-md bg-gradient-to-br from-white to-brand-beige/20 p-4 shadow-lg hover:shadow-xl transition-all duration-300">
        <AspectRatio ratio={1} className="bg-white/90 backdrop-blur-sm rounded-md">
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
        <p className="text-brand-black font-medium text-lg">{getPrice(name)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
