import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";

interface PersonalInfoFormProps {
  onNext: (data: PersonalInfo) => void;
}

interface PersonalInfo {
  name: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  profession: string;
}

const PROFESSIONS = [
  "Student",
  "Software Professional",
  "Business Owner",
  "Doctor",
  "Lawyer",
  "Artist",
  "Other",
];

const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];

const MARITAL_STATUS = ["Single", "Married", "Divorced", "Widowed"];

const PersonalInfoForm = ({ onNext }: PersonalInfoFormProps) => {
  const [formData, setFormData] = React.useState<PersonalInfo>({
    name: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    profession: "",
  });
  const [errors, setErrors] = React.useState<Partial<PersonalInfo>>({});

  const validateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= 18;
  };

  const handleSubmit = () => {
    const newErrors: Partial<PersonalInfo> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else if (!validateAge(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "You must be at least 18 years old";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.maritalStatus) {
      newErrors.maritalStatus = "Marital status is required";
    }

    if (!formData.profession) {
      newErrors.profession = "Profession is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext(formData);
    }
  };

  const isFormValid =
    formData.name &&
    formData.dateOfBirth &&
    validateAge(formData.dateOfBirth) &&
    formData.gender &&
    formData.maritalStatus &&
    formData.profession;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 bg-[#FFEDD5] min-h-screen">
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
          <h2 className="text-xl font-mono text-[#2D3047]">PERSONAL INFO</h2>
        </div>

        {/* Progress bar - assuming this is the final step */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-full bg-[#2EC4B6]" />
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono">
            TELL US ABOUT <span className="italic">YOURSELF</span>
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-8">
          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#2D3047] font-mono">
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-2 border-[#2D3047] bg-white py-6
                focus:ring-2 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
            />
            {errors.name && (
              <p className="text-[#E71D36] text-sm">{errors.name}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <Label htmlFor="dob" className="text-[#2D3047] font-mono">
              Date of Birth
            </Label>
            <Input
              id="dob"
              type="date"
              max={format(new Date(), "yyyy-MM-dd")}
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
              className="border-2 border-[#2D3047] bg-white py-6
                focus:ring-2 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
            />
            {errors.dateOfBirth && (
              <p className="text-[#E71D36] text-sm">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Gender Selection */}
          <div className="space-y-4">
            <Label className="text-[#2D3047] font-mono">Gender</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {GENDERS.map((gender) => (
                <div key={gender} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={gender}
                    id={`gender-${gender}`}
                    className="border-2 border-[#2D3047]"
                  />
                  <Label
                    htmlFor={`gender-${gender}`}
                    className="text-[#2D3047]"
                  >
                    {gender}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.gender && (
              <p className="text-[#E71D36] text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Marital Status */}
          <div className="space-y-4">
            <Label className="text-[#2D3047] font-mono">Marital Status</Label>
            <RadioGroup
              value={formData.maritalStatus}
              onValueChange={(value) =>
                setFormData({ ...formData, maritalStatus: value })
              }
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {MARITAL_STATUS.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={status}
                    id={`status-${status}`}
                    className="border-2 border-[#2D3047]"
                  />
                  <Label
                    htmlFor={`status-${status}`}
                    className="text-[#2D3047]"
                  >
                    {status}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.maritalStatus && (
              <p className="text-[#E71D36] text-sm">{errors.maritalStatus}</p>
            )}
          </div>

          {/* Profession */}
          <div className="space-y-4">
            <Label className="text-[#2D3047] font-mono">Profession</Label>
            <RadioGroup
              value={formData.profession}
              onValueChange={(value) =>
                setFormData({ ...formData, profession: value })
              }
              className="grid grid-cols-1 gap-4"
            >
              {PROFESSIONS.map((profession) => (
                <div key={profession} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={profession}
                    id={`profession-${profession}`}
                    className="border-2 border-[#2D3047]"
                  />
                  <Label
                    htmlFor={`profession-${profession}`}
                    className="text-[#2D3047]"
                  >
                    {profession}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.profession && (
              <p className="text-[#E71D36] text-sm">{errors.profession}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFormValid ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full bg-[#2D3047] text-white text-lg py-6
              hover:bg-[#2D3047]/90 transition-all"
          >
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalInfoForm;
