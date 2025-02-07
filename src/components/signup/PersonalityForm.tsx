import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PersonalityFormProps {
  onNext: (selection: string) => void;
}

const PersonalityForm = ({ onNext }: PersonalityFormProps) => {
  const [selected, setSelected] = React.useState<string>("");

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="mb-8 text-[#2D3047] hover:text-[#2D3047]/70"
        >
          ← Back
        </Button>

        <h2 className="text-2xl font-mono text-[#2D3047] mb-2">PERSONALITY</h2>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3047] font-mono">
            ARE YOUR <span className="italic">OPINIONS</span> USUALLY
            <br />
            GUIDED BY:
          </h1>
        </div>

        <div className="space-y-4">
          <motion.button
            onClick={() => setSelected("logic")}
            className={`w-full p-6 border-4 border-[#2D3047] ${
              selected === "logic"
                ? "bg-[#2EC4B6] text-white"
                : "bg-white hover:bg-[#2EC4B6]/10"
            } 
              transition-all duration-200 text-left text-xl font-medium
              shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]
              hover:shadow-[8px_8px_0px_0px_rgba(45,48,71,1)]
              hover:-translate-x-1 hover:-translate-y-1`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Logic and facts
          </motion.button>

          <motion.button
            onClick={() => setSelected("emotions")}
            className={`w-full p-6 border-4 border-[#2D3047] ${
              selected === "emotions"
                ? "bg-[#2EC4B6] text-white"
                : "bg-white hover:bg-[#2EC4B6]/10"
            } 
              transition-all duration-200 text-left text-xl font-medium
              shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]
              hover:shadow-[8px_8px_0px_0px_rgba(45,48,71,1)]
              hover:-translate-x-1 hover:-translate-y-1`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Emotions and feelings
          </motion.button>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: selected ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => selected && onNext(selected)}
            disabled={!selected}
            className="w-full bg-[#E71D36] hover:bg-[#FF5C5C] text-white text-lg px-8 py-6 
              rounded-none border-4 border-[#2D3047] 
              shadow-[8px_8px_0px_0px_rgba(45,48,71,1)] 
              transition-all 
              hover:shadow-[4px_4px_0px_0px_rgba(45,48,71,1)] 
              hover:-translate-x-1 hover:-translate-y-1"
          >
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalityForm;
