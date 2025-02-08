import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Languages, IndianRupee, UtensilsCrossed } from "lucide-react";

interface DiningPreferencesProps {
  onNext: (preferences: DiningPreferences) => void;
}

interface DiningPreferences {
  languages: string[];
  budget: string;
  dietaryPreferences: string;
}

const LANGUAGES = [
  "English",
  "Hindi",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
];

const BUDGET_OPTIONS = [
  { value: "budget", label: "₹", description: "Up to ₹800 per person" },
  { value: "moderate", label: "₹₹", description: "₹800-1500 per person" },
  { value: "premium", label: "₹₹₹", description: "₹1500+ per person" },
];

const DIETARY_PREFERENCES = [
  "Vegetarian",
  "Non-vegetarian",
  "I eat everything",
  "Other",
];

const DiningPreferences = ({ onNext }: DiningPreferencesProps) => {
  const [preferences, setPreferences] = React.useState<DiningPreferences>({
    languages: [],
    budget: "",
    dietaryPreferences: "",
  });

  const toggleLanguage = (language: string) => {
    setPreferences((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const isFormValid =
    preferences.languages.length > 0 &&
    preferences.budget &&
    preferences.dietaryPreferences;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 bg-[#FFEDD5] min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8"
      >
        {/* Header with back button and title */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-[#2D3047]"
          >
            ←
          </Button>
          <h2 className="text-xl font-mono text-[#2D3047]">PREFERENCES</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-full bg-[#2EC4B6]" />
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono">
            SET YOUR <span className="italic">PREFERENCES</span>
          </h1>
        </div>

        {/* Languages */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2 text-[#2D3047]">
            <Languages className="w-5 h-5" />
            <Label className="font-mono text-lg">Languages You Speak</Label>
          </div>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((language) => (
              <motion.button
                key={language}
                onClick={() => toggleLanguage(language)}
                className={`px-4 py-2 rounded-lg border-2 border-[#2D3047]
                  ${
                    preferences.languages.includes(language)
                      ? "bg-[#2D3047] text-white"
                      : "bg-white hover:bg-[#2D3047]/5"
                  }
                  transition-all duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2 text-[#2D3047]">
            <IndianRupee className="w-5 h-5" />
            <Label className="font-mono text-lg">Preferred Budget</Label>
          </div>
          <RadioGroup
            value={preferences.budget}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, budget: value }))
            }
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {BUDGET_OPTIONS.map((option) => (
              <div
                key={option.value}
                className={`p-4 border-2 border-[#2D3047] rounded-lg cursor-pointer
                  ${
                    preferences.budget === option.value
                      ? "bg-[#2D3047] text-white"
                      : "bg-white hover:bg-[#2D3047]/5"
                  }
                  transition-all duration-200`}
                onClick={() =>
                  setPreferences((prev) => ({ ...prev, budget: option.value }))
                }
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl font-mono">{option.label}</span>
                  <span className="text-sm text-center">
                    {option.description}
                  </span>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Dietary Preferences */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2 text-[#2D3047]">
            <UtensilsCrossed className="w-5 h-5" />
            <Label className="font-mono text-lg">Dietary Preferences</Label>
          </div>
          <RadioGroup
            value={preferences.dietaryPreferences}
            onValueChange={(value) =>
              setPreferences((prev) => ({ ...prev, dietaryPreferences: value }))
            }
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {DIETARY_PREFERENCES.map((preference) => (
              <div
                key={preference}
                className={`p-4 border-2 border-[#2D3047] rounded-lg cursor-pointer
                  ${
                    preferences.dietaryPreferences === preference
                      ? "bg-[#2D3047] text-white"
                      : "bg-white hover:bg-[#2D3047]/5"
                  }
                  transition-all duration-200`}
                onClick={() =>
                  setPreferences((prev) => ({
                    ...prev,
                    dietaryPreferences: preference,
                  }))
                }
              >
                <span className="text-lg font-mono">{preference}</span>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isFormValid ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => isFormValid && onNext(preferences)}
            disabled={!isFormValid}
            className="w-full bg-[#2D3047] text-white text-lg py-6
              hover:bg-[#2D3047]/90 transition-all"
          >
            Complete Profile
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiningPreferences;
