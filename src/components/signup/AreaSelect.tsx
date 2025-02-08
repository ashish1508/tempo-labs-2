import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface AreaSelectProps {
  city: string;
  onNext: (areas: string[]) => void;
}

const cityAreas: Record<string, string[]> = {
  mumbai: [
    "Bandra West",
    "Lower Parel",
    "Andheri West",
    "Powai",
    "Juhu",
    "Colaba",
    "Worli",
  ],
  delhi: [
    "Connaught Place",
    "Hauz Khas",
    "South Extension",
    "Rajouri Garden",
    "Dwarka",
    "Saket",
    "Vasant Kunj",
  ],
  bengaluru: [
    "Indiranagar",
    "Koramangala",
    "HSR Layout",
    "Whitefield",
    "JP Nagar",
    "Brigade Road",
    "Church Street",
  ],
  // Add more cities and their areas as needed
};

const AreaSelect = ({ city, onNext }: AreaSelectProps) => {
  const [selectedAreas, setSelectedAreas] = React.useState<string[]>([]);
  const areas = cityAreas[city] || [];

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((a) => a !== area);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, area];
    });
  };

  const removeArea = (area: string) => {
    setSelectedAreas((prev) => prev.filter((a) => a !== area));
  };

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
          <h2 className="text-xl font-mono text-[#2D3047]">PREFERRED AREAS</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-full bg-[#2EC4B6]" />
        </div>

        {/* Title and subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono mb-4">
            WHERE DO YOU PREFER TO <span className="italic">DINE</span>?
          </h1>
          <p className="text-[#2D3047]/70">
            Select up to 3 areas in{" "}
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </p>
        </div>

        {/* Selected areas */}
        {selectedAreas.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {selectedAreas.map((area) => (
              <Badge
                key={area}
                className="bg-[#2EC4B6] text-white border-2 border-[#2D3047] px-3 py-1.5
                  flex items-center gap-2 text-sm font-mono"
              >
                {area}
                <button
                  onClick={() => removeArea(area)}
                  className="hover:text-[#2D3047] transition-colors"
                >
                  <X size={14} />
                </button>
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Areas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {areas.map((area) => (
            <motion.button
              key={area}
              onClick={() => toggleArea(area)}
              className={`p-4 border-2 border-[#2D3047] rounded-lg text-left
                ${
                  selectedAreas.includes(area)
                    ? "bg-[#2D3047] text-white"
                    : "bg-white hover:bg-[#2D3047]/5"
                }
                ${
                  selectedAreas.length >= 3 && !selectedAreas.includes(area)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
                transition-all duration-200`}
              whileHover={
                selectedAreas.length < 3 || selectedAreas.includes(area)
                  ? { scale: 1.02 }
                  : {}
              }
              whileTap={
                selectedAreas.length < 3 || selectedAreas.includes(area)
                  ? { scale: 0.98 }
                  : {}
              }
            >
              <span className="font-mono text-lg">{area}</span>
            </motion.button>
          ))}
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedAreas.length > 0 ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => selectedAreas.length && onNext(selectedAreas)}
            disabled={!selectedAreas.length}
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

export default AreaSelect;
