import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface LocationSelectProps {
  onNext: (city: string) => void;
}

const cities = [
  {
    id: "mumbai",
    name: "Mumbai",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14M8 9h8M8 13h8M8 17h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "delhi",
    name: "Delhi-NCR",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M4 21h16M6 21V8a2 2 0 012-2h8a2 2 0 012 2v13M12 3v3M9 9h6M9 13h6M9 17h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21V8a2 2 0 012-2h10a2 2 0 012 2v13M12 3v3M8 11h8M8 15h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21V8l7-5 7 5v13M9 9h6M9 13h6M9 17h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M6 21V8l6-4 6 4v13M9 9h6M9 13h6M9 17h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 3L4 9v12h16V9l-8-6zM4 9h16M12 3v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "chennai",
    name: "Chennai",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21V8a2 2 0 012-2h10a2 2 0 012 2v13M12 3v3M8 11h8M8 15h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "pune",
    name: "Pune",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M6 21V8l6-4 6 4v13M9 9h6M9 13h6M9 17h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "kolkata",
    name: "Kolkata",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14M8 9h8M8 13h8M8 17h8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "kochi",
    name: "Kochi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M3 21h18M5 21c0-9 14-9 14 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 21c0-7 10-7 10 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const LocationSelect = ({ onNext }: LocationSelectProps) => {
  const [selected, setSelected] = React.useState<string>("");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 bg-[#FFEDD5] min-h-screen flex flex-col">
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
          <h2 className="text-xl font-mono text-[#2D3047]">LOCATION</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-2/3 bg-[#2EC4B6]" />
        </div>

        {/* Question */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono">
            WHERE ARE YOU <span className="italic">BASED</span>?
          </h1>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <motion.button
              key={city.id}
              onClick={() => setSelected(city.id)}
              className={`p-6 border-2 border-[#2D3047] rounded-lg
                ${selected === city.id ? "bg-[#2D3047] text-white" : "bg-white"} 
                transition-all duration-200
                hover:bg-[#2D3047] hover:text-white
                flex flex-col items-center justify-center
                aspect-square`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {city.icon}
              <span className="font-mono text-lg">{city.name}</span>
            </motion.button>
          ))}
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

export default LocationSelect;
