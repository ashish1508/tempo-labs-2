import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import TableAnimation from "./TableAnimation";

interface HeroSectionProps {
  onJoinClick?: () => void;
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  onJoinClick = () => console.log("Join clicked"),
  title = "Connect Through Shared Meals",
  subtitle = "Join our community of food lovers and experience the joy of dining with new friends",
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-[#FFBF69] flex items-center justify-center px-4 py-16 pattern-plus-lg pattern-[#FF9F1C] pattern-bg-transparent pattern-opacity-20 pattern-size-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D3047] mb-6 font-mono leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#2D3047] mb-8 font-medium max-w-2xl">
            {subtitle}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onJoinClick}
              className="bg-[#E71D36] hover:bg-[#FF5C5C] text-white text-lg px-8 py-6 rounded-none border-4 border-[#2D3047] shadow-[8px_8px_0px_0px_rgba(45,48,71,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(45,48,71,1)] hover:-translate-x-1 hover:-translate-y-1"
            >
              Join a Table
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] via-[#4CC9F0] to-[#2EC4B6] rounded-full opacity-30 blur-xl"
            />
            <TableAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
