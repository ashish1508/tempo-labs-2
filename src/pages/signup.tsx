import React from "react";
import PersonalityForm from "@/components/signup/PersonalityForm";
import LocationSelect from "@/components/signup/LocationSelect";
import AreaSelect from "@/components/signup/AreaSelect";
import PersonalInfoForm from "@/components/signup/PersonalInfoForm";

type Step = "personality" | "location" | "areas" | "personal";

interface PersonalInfo {
  name: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  profession: string;
}

const SignupPage = () => {
  const [step, setStep] = React.useState<Step>("personality");
  const [formData, setFormData] = React.useState({
    personality: null as number | null,
    location: "",
    areas: [] as string[],
    personalInfo: null as PersonalInfo | null,
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
    setStep("personal");
  };

  const handlePersonalInfoNext = (personalInfo: PersonalInfo) => {
    setFormData((prev) => ({ ...prev, personalInfo }));
    console.log("Final form data:", { ...formData, personalInfo });
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
      {step === "personal" && (
        <PersonalInfoForm onNext={handlePersonalInfoNext} />
      )}
    </div>
  );
};

export default SignupPage;
