
import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  largeText?: boolean;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello! I'm interested in your products.",
  className,
  largeText = false,
}: WhatsAppButtonProps) => {
  // Format the phone number to remove any non-numeric characters
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        largeText
          ? "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          : "fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110",
        className
      )}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={largeText ? "w-9 h-9" : "w-7 h-7"} />
      {largeText && <span>Any Questions? Ask in WhatsApp</span>}
    </a>
  );
};

export default WhatsAppButton;
