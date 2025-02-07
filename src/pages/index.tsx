import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialSection from "@/components/landing/TestimonialSection";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#FFEDD5]">
      <HeroSection />
      <HowItWorks />
      <TestimonialSection />
    </main>
  );
};

export default LandingPage;
