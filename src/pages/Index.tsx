import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import StorySection from "@/components/StorySection";
// import TestimonialSection from "@/components/TestimonialSection";
// import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuickSupportChat from "@/components/QuickSupportChat";
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
                    <h3 className="font-serif text-2xl mb-4 text-brand-black">Areas of Application</h3>
                    
                    <h4 className="font-serif text-xl mb-2 text-brand-black">Health:</h4>
                    <p className="text-brand-gray mb-4">
                      Anti-inflammatory properties, supports joint health and mobility.
                    </p>
                    
                    <h4 className="font-serif text-xl mb-2 text-brand-black">Cosmetics:</h4>
                    <p className="text-brand-gray mb-4">
                      Nourishing and regenerating effects for healthy, radiant skin.
                    </p>
                    
                    <h4 className="font-serif text-xl mb-2 text-brand-black">Tradition:</h4>
                    <p className="text-brand-gray mb-4">
                      Used in aromatherapy and spiritual ceremonies for centuries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <StorySection />
        {/* <TestimonialSection /> */}
        <QuickSupportChat />
      </main>
      <div id="footer-section">
        <Footer />
      </div>
      <WhatsAppButton phoneNumber="+252907919191" largeText />
    </div>
  );
};

export default Index;
