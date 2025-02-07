import React from "react";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

interface TableAnimationProps {
  cycleSpeed?: number;
  numberOfSeats?: number;
}

const TableAnimation = ({
  cycleSpeed = 2000,
  numberOfSeats = 5,
}: TableAnimationProps) => {
  const [currentSeats, setCurrentSeats] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeats((prev) => (prev + 1) % (numberOfSeats + 1));
    }, cycleSpeed);

    return () => clearInterval(interval);
  }, [cycleSpeed, numberOfSeats]);

  const chairs = Array.from({ length: numberOfSeats }, (_, index) => {
    const angle = (index * 360) / numberOfSeats;
    const isOccupied = index < currentSeats;

    return (
      <motion.div
        key={index}
        className="absolute"
        style={{
          transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isOccupied ? 1 : 0.3,
          scale: isOccupied ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-[#FF9F1C] rounded-full border-4 border-[#2D3047] shadow-lg flex items-center justify-center">
          {isOccupied && (
            <motion.img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=person${index}`}
              alt={`Person ${index + 1}`}
              className="w-12 h-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          )}
        </div>
      </motion.div>
    );
  });

  return (
    <div className="relative w-[300px] h-[300px] bg-[#4CC9F0] rounded-full flex items-center justify-center border-4 border-[#2D3047] shadow-[8px_8px_0px_0px_rgba(45,48,71,1)]">
      {/* Table center */}
      <motion.div
        className="w-32 h-32 bg-[#2EC4B6] rounded-full border-4 border-[#2D3047] flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Utensils className="w-12 h-12 text-[#2D3047]" />
      </motion.div>

      {/* Chairs */}
      {chairs}
    </div>
  );
};

export default TableAnimation;
