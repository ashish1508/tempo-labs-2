import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Languages,
  IndianRupee,
  UtensilsCrossed,
  MapPin,
  Calendar,
} from "lucide-react";
import BottomNav from "@/components/navigation/BottomNav";

const ProfilePage = () => {
  const userProfile = {
    personalInfo: {
      name: "Sarah Chen",
      dateOfBirth: "1990-05-15",
      gender: "Female",
      maritalStatus: "Single",
      profession: "Software Professional",
    },
    location: {
      city: "Mumbai",
      areas: ["Bandra West", "Lower Parel", "Powai"],
    },
    preferences: {
      languages: ["English", "Hindi"],
      budget: "moderate",
      dietaryPreferences: "Non-vegetarian",
    },
    diningDates: ["2024-02-14", "2024-02-21", "2024-02-28"],
  };

  return (
    <div className="min-h-screen bg-[#FFEDD5] pb-20 flex justify-center">
      <div className="w-full max-w-md">
        <header className="bg-[#2D3047] text-white py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-mono">Your Profile</h1>
          <Button
            variant="ghost"
            onClick={() => {
              // Add logout logic here
              navigate("/auth");
            }}
            className="text-white hover:text-white/80"
          >
            Logout
          </Button>
        </header>

        <div className="p-4 space-y-6">
          {/* Personal Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold font-mono">
                Personal Information
              </h2>
              <Button
                variant="ghost"
                className="text-[#F72585] hover:text-[#F72585]/80"
                onClick={() => console.log("Edit personal info")}
              >
                Edit
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#2D3047]/70">Name</label>
                <p className="font-medium">{userProfile.personalInfo.name}</p>
              </div>
              <div>
                <label className="text-sm text-[#2D3047]/70">
                  Date of Birth
                </label>
                <p className="font-medium">
                  {userProfile.personalInfo.dateOfBirth}
                </p>
              </div>
              <div>
                <label className="text-sm text-[#2D3047]/70">Gender</label>
                <p className="font-medium">{userProfile.personalInfo.gender}</p>
              </div>
              <div>
                <label className="text-sm text-[#2D3047]/70">
                  Marital Status
                </label>
                <p className="font-medium">
                  {userProfile.personalInfo.maritalStatus}
                </p>
              </div>
              <div>
                <label className="text-sm text-[#2D3047]/70">Profession</label>
                <p className="font-medium">
                  {userProfile.personalInfo.profession}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Location Preferences */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold font-mono">Location</h2>
              <Button
                variant="ghost"
                className="text-[#F72585] hover:text-[#F72585]/80"
                onClick={() => console.log("Edit location")}
              >
                Edit
              </Button>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#2D3047] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">{userProfile.location.city}</p>
                <p className="text-sm text-[#2D3047]/70">
                  Preferred areas: {userProfile.location.areas.join(", ")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Dining Preferences */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold font-mono">
                Dining Preferences
              </h2>
              <Button
                variant="ghost"
                className="text-[#F72585] hover:text-[#F72585]/80"
                onClick={() => console.log("Edit preferences")}
              >
                Edit
              </Button>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Languages className="w-5 h-5 text-[#2D3047] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Languages</p>
                  <p className="text-sm text-[#2D3047]/70">
                    {userProfile.preferences.languages.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IndianRupee className="w-5 h-5 text-[#2D3047] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Budget</p>
                  <p className="text-sm text-[#2D3047]/70">
                    {userProfile.preferences.budget === "moderate"
                      ? "₹800-1500 per person"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[#2D3047] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Dietary Preferences</p>
                  <p className="text-sm text-[#2D3047]/70">
                    {userProfile.preferences.dietaryPreferences}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Dining Schedule */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold font-mono">Dining Schedule</h2>
              <Button
                variant="ghost"
                className="text-[#F72585] hover:text-[#F72585]/80"
                onClick={() => console.log("Edit schedule")}
              >
                Edit
              </Button>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#2D3047] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Selected Dates</p>
                <div className="space-y-1">
                  {userProfile.diningDates.map((date) => (
                    <p key={date} className="text-sm text-[#2D3047]/70">
                      {new Date(date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
