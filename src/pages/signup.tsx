import React from "react";
import PersonalityForm from "@/components/signup/PersonalityForm";
import LocationSelect from "@/components/signup/LocationSelect";
import AreaSelect from "@/components/signup/AreaSelect";
import PersonalInfoForm from "@/components/signup/PersonalInfoForm";
import DiningDateSelect from "@/components/signup/DiningDateSelect";
import DiningPreferences from "@/components/signup/DiningPreferences";
import PricingPlans from "@/components/signup/PricingPlans";

type Step =
  | "personality"
  | "location"
  | "areas"
  | "personal"
  | "dates"
  | "preferences"
  | "pricing";

interface PersonalInfo {
  name: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  profession: string;
}

interface DiningPreferences {
  languages: string[];
  budget: string;
  dietaryPreferences: string;
}

interface PricingSelection {
  type: "subscription" | "single";
  plan?: string;
}

const SignupPage = () => {
  const [step, setStep] = React.useState<Step>("personality");
  const [formData, setFormData] = React.useState({
    personality: null as number | null,
    location: "",
    areas: [] as string[],
    personalInfo: null as PersonalInfo | null,
    diningDates: [] as string[],
    diningPreferences: null as DiningPreferences | null,
    pricingSelection: null as PricingSelection | null,
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
    setStep("dates");
  };

  const handleDatesNext = (dates: string[]) => {
    setFormData((prev) => ({ ...prev, diningDates: dates }));
    setStep("preferences");
  };

  const handlePreferencesNext = (preferences: DiningPreferences) => {
    setFormData((prev) => ({ ...prev, diningPreferences: preferences }));
    setStep("pricing");
  };

  const handlePricingNext = (selection: PricingSelection) => {
    setFormData((prev) => ({ ...prev, pricingSelection: selection }));
    console.log("Complete signup data:", {
      ...formData,
      pricingSelection: selection,
    });
    // Handle payment processing and final submission
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
      {step === "dates" && <DiningDateSelect onNext={handleDatesNext} />}
      {step === "preferences" && (
        <DiningPreferences onNext={handlePreferencesNext} />
      )}
      {step === "pricing" && <PricingPlans onNext={handlePricingNext} />}
    </div>
  );
};

export default SignupPage;
