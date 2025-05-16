
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would send this to an API
    console.log("Subscribing email:", email);
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates from Lubaan Assense soon.",
      duration: 5000,
    });
    
    setEmail("");
  };

  return (
    <section className="bg-brand-olive py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Community</h2>
          <p className="mb-6 text-white/90">
            Sign up to receive updates, exclusive offers, and wellness tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-white/10 border border-white/30 px-4 py-2 rounded flex-grow text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button 
              type="submit"
              className="bg-white text-brand-olive hover:bg-brand-light rounded"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
