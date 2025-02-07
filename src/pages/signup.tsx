import React from "react";
import PersonalityForm from "@/components/signup/PersonalityForm";

const SignupPage = () => {
  const handleNext = (selection: string) => {
    console.log("Selected:", selection);
    // Will handle navigation to next step
  };

  return (
    <div className="min-h-screen bg-[#FFBF69] flex items-center justify-center py-16 pattern-plus-lg pattern-[#FF9F1C] pattern-bg-transparent pattern-opacity-20 pattern-size-8">
      <PersonalityForm onNext={handleNext} />
    </div>
  );
};

export default SignupPage;
