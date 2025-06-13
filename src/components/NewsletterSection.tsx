
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would send this to an API
    console.log("Subscribing email:", email);
    
    toast({
      title: "Thank you for subscribing",
      description: "You'll receive updates from Lubaan Assense soon.",
      duration: 5000,
    });
    
    setEmail("");
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-brand-black mb-4">Join Our Newsletter</h2>
          <p className="mb-8 text-brand-gray">
            Subscribe for exclusive offers, new releases, and insights into the art of fragrance.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-transparent border-b border-brand-black px-4 py-2 flex-grow text-brand-black placeholder:text-brand-gray focus:outline-none focus:border-brand-accent"
            />
            <Button 
              type="submit"
              className="bg-brand-black hover:bg-brand-dark text-white rounded-none"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
