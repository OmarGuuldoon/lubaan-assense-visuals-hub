
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import StorySection from "@/components/StorySection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <StorySection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+19876543210" />
    </div>
  );
};

export default Index;
