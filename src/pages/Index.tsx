
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import StorySection from "@/components/StorySection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="/lovable-uploads/976cf4ca-dde3-476d-90e9-14ca96c917f4.png" 
                      alt="Premium Frankincense" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h3 className="font-serif text-2xl mb-4 text-brand-black">Discover Our Ceremonial Grade</h3>
                    <p className="text-brand-gray mb-6">
                      Our finest selection of frankincense resin, harvested with care from ancient trees and processed using traditional methods to preserve its pure essence.
                    </p>
                    <p className="text-brand-dark">
                      Perfect for spiritual ceremonies, aromatherapy, and personal wellness rituals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <StorySection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <div id="footer-section">
        <Footer />
      </div>
      <WhatsAppButton phoneNumber="+19876543210" />
    </div>
  );
};

export default Index;
