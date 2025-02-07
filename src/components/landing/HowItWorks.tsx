import React from "react";
import { motion } from "framer-motion";
import { Users2, Utensils, Heart } from "lucide-react";

interface HowItWorksProps {
  steps?: Array<{
    icon: "match" | "meet" | "share";
    title: string;
    description: string;
  }>;
}

const HowItWorks = ({
  steps = [
    {
      icon: "match",
      title: "Match",
      description:
        "Get matched with like-minded diners based on your interests and preferences",
    },
    {
      icon: "meet",
      title: "Meet",
      description:
        "Join a table at a carefully selected restaurant in your area",
    },
    {
      icon: "share",
      title: "Share",
      description: "Share stories, laughter, and great food with new friends",
    },
  ],
}: HowItWorksProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "match":
        return <Users2 className="w-12 h-12" />;
      case "meet":
        return <Utensils className="w-12 h-12" />;
      case "share":
        return <Heart className="w-12 h-12" />;
      default:
        return <Users2 className="w-12 h-12" />;
    }
  };

  return (
    <section className="w-full bg-[#2EC4B6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2D3047] font-mono"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-[#FFBF69] rounded-full flex items-center justify-center mb-6 border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
              >
                <div className="text-[#2D3047]">{getIcon(step.icon)}</div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#2D3047] font-mono">
                {step.title}
              </h3>
              <p className="text-lg text-[#2D3047] max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
