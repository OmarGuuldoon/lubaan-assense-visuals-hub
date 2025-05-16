
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import StorySection from "@/components/StorySection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Index;
