import React from "react";
import PersonalityForm from "@/components/signup/PersonalityForm";
import LocationSelect from "@/components/signup/LocationSelect";
import AreaSelect from "@/components/signup/AreaSelect";

type Step = "personality" | "location" | "areas";

const SignupPage = () => {
  const [step, setStep] = React.useState<Step>("personality");
  const [formData, setFormData] = React.useState({
    personality: null as number | null,
    location: "",
    areas: [] as string[],
  });

  const handlePersonalityNext = (selection: number) => {
    setFormData((prev) => ({ ...prev, personality: selection }));
    setStep("location");
  };

  const handleLocationNext = (city: string) => {
    setFormData((prev) => ({ ...prev, location: city }));
    setStep("areas");
  };

  const handleAreasNext = (areas: string[]) => {
    setFormData((prev) => ({ ...prev, areas }));
    console.log("Final form data:", { ...formData, areas });
    // Will handle form submission and navigation to next step
  };

  return (
    <div className="min-h-screen bg-[#FFEDD5]">
      {step === "personality" && (
        <PersonalityForm onNext={handlePersonalityNext} />
      )}
      {step === "location" && <LocationSelect onNext={handleLocationNext} />}
      {step === "areas" && (
        <AreaSelect city={formData.location} onNext={handleAreasNext} />
      )}
    </div>
  );
};

export default SignupPage;
