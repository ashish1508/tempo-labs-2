import React from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

interface GridAnimationProps {
  delay?: number;
}

const GridAnimation = ({ delay = 0 }: GridAnimationProps) => {
  // Create a 4x4 grid of items
  const gridItems = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    delay: delay + i * 0.1,
  }));

  return (
    <div className="w-[600px] h-[400px] relative bg-[#011627] border-4 border-[#2D3047] shadow-[8px_8px_0px_0px_rgba(45,48,71,1)] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8">
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: item.delay,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="absolute inset-0 bg-[#F72585] border-2 border-[#2D3047] transform rotate-45" />
          </motion.div>
        ))}
      </div>

      {/* Centered icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 1.6, duration: 0.5 }}
      >
        <div className="bg-[#4CC9F0] p-8 rounded-none border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]">
          <Utensils className="w-16 h-16 text-[#2D3047]" />
        </div>
      </motion.div>

      {/* Retro lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(45,48,71,0.1) 0px, rgba(45,48,71,0.1) 1px, transparent 1px, transparent 4px)`,
        }}
      />
    </div>
  );
};

export default GridAnimation;
