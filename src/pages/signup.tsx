import React from "react";
import PersonalityForm from "@/components/signup/PersonalityForm";
import LocationSelect from "@/components/signup/LocationSelect";

type Step = "personality" | "location";

const SignupPage = () => {
  const [step, setStep] = React.useState<Step>("personality");
  const [formData, setFormData] = React.useState({
    personality: null as number | null,
    location: "",
  });

  const handlePersonalityNext = (selection: number) => {
    setFormData((prev) => ({ ...prev, personality: selection }));
    setStep("location");
  };

  const handleLocationNext = (city: string) => {
    setFormData((prev) => ({ ...prev, location: city }));
    console.log("Final form data:", { ...formData, location: city });
    // Will handle form submission and navigation to next step
  };

  return (
    <div className="min-h-screen bg-[#FFEDD5]">
      {step === "personality" && (
        <PersonalityForm onNext={handlePersonalityNext} />
      )}
      {step === "location" && <LocationSelect onNext={handleLocationNext} />}
    </div>
  );
};

export default SignupPage;
