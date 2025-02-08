import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MobileNumberInputProps {
  onSubmit: (mobile: string) => void;
}

const MobileNumberInput = ({ onSubmit }: MobileNumberInputProps) => {
  const [mobile, setMobile] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    onSubmit(mobile);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 bg-[#FFEDD5] min-h-screen flex flex-col">
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
          <h2 className="text-xl font-mono text-[#2D3047]">LOGIN</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-1/2 bg-[#2EC4B6]" />
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono">
            ENTER YOUR <span className="italic">MOBILE</span> NUMBER
          </h1>
        </div>

        {/* Mobile input */}
        <div className="space-y-6">
          <div className="relative">
            <Input
              type="tel"
              maxLength={10}
              value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setMobile(value);
                setError("");
              }}
              className="text-2xl py-6 px-4 border-2 border-[#2D3047] rounded-lg
                bg-white focus:ring-2 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
              placeholder="Enter your mobile number"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#E71D36] text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mobile.length === 10 ? 1 : 0.5 }}
          >
            <Button
              onClick={handleSubmit}
              disabled={mobile.length !== 10}
              className="w-full bg-[#2D3047] text-white text-lg py-6
                hover:bg-[#2D3047]/90 transition-all"
            >
              Get OTP
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNumberInput;
