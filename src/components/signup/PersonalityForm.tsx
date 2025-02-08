import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PersonalityFormProps {
  onNext: (selection: number) => void;
}

const PersonalityForm = ({ onNext }: PersonalityFormProps) => {
  const [selected, setSelected] = React.useState<number | null>(null);

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
          <h2 className="text-xl font-mono text-[#2D3047]">PERSONALITY</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12" />

        {/* Question */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono">
            I AM AN <span className="italic">INTROVERT</span> PERSON
          </h1>
        </div>

        {/* Rating scale */}
        <div className="space-y-8">
          <span className="text-[#2D3047] text-sm">Strongly Disagree</span>

          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((number) => (
              <motion.button
                key={number}
                onClick={() => setSelected(number)}
                className={`aspect-square w-full border-2 border-[#2D3047] rounded-lg
                  ${selected === number ? "bg-[#2D3047] text-white" : "bg-white"} 
                  transition-all duration-200 text-xl font-mono
                  hover:bg-[#2D3047] hover:text-white
                  flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {number}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4">
            {[6, 7, 8, 9, 10].map((number) => (
              <motion.button
                key={number}
                onClick={() => setSelected(number)}
                className={`aspect-square w-full border-2 border-[#2D3047] rounded-lg
                  ${selected === number ? "bg-[#2D3047] text-white" : "bg-white"} 
                  transition-all duration-200 text-xl font-mono
                  hover:bg-[#2D3047] hover:text-white
                  flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {number}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-end">
            <span className="text-[#2D3047] text-sm">Strongly Agree</span>
          </div>
        </div>

        {/* Continue button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: selected ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => selected && onNext(selected)}
            disabled={!selected}
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

export default PersonalityForm;
