import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Calendar, Star, Clock } from "lucide-react";

interface PricingPlansProps {
  onNext: (selection: {
    type: "subscription" | "single";
    plan?: string;
  }) => void;
}

const SUBSCRIPTION_PLANS = [
  {
    duration: "1",
    price: 2999,
    perMonth: 2999,
    features: [
      "1 dinner per month",
      "Priority table matching",
      "Cancel anytime",
    ],
  },
  {
    duration: "3",
    price: 7999,
    perMonth: 2666,
    features: [
      "1 dinner per month",
      "Priority table matching",
      "Exclusive events access",
      "₹333/month savings",
    ],
    recommended: true,
  },
  {
    duration: "6",
    price: 14999,
    perMonth: 2500,
    features: [
      "1 dinner per month",
      "VIP table matching",
      "Exclusive events access",
      "₹499/month savings",
      "Free cancellation",
    ],
  },
];

const SINGLE_DINNER_PRICE = 3499;

const PricingPlans = ({ onNext }: PricingPlansProps) => {
  const [selectedType, setSelectedType] = React.useState<
    "subscription" | "single"
  >();
  const [selectedPlan, setSelectedPlan] = React.useState<string>();

  const handleSubmit = () => {
    if (selectedType === "single") {
      onNext({ type: "single" });
    } else if (selectedType === "subscription" && selectedPlan) {
      onNext({ type: "subscription", plan: selectedPlan });
    }
  };

  const isValid =
    selectedType === "single" ||
    (selectedType === "subscription" && selectedPlan);

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
          <h2 className="text-xl font-mono text-[#2D3047]">CHOOSE PLAN</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-full bg-[#2EC4B6]" />
        </div>

        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono mb-4">
            CHOOSE YOUR <span className="italic">DINING</span> PLAN
          </h1>
          <p className="text-[#2D3047]/70 text-lg">
            Select a plan that works best for your dining preferences
          </p>
        </div>

        {/* Plan Type Selection */}
        <RadioGroup
          value={selectedType}
          onValueChange={(value: "subscription" | "single") => {
            setSelectedType(value);
            setSelectedPlan(undefined);
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Subscription Option */}
          <div
            className={`relative p-6 border-2 border-[#2D3047] rounded-lg cursor-pointer
              ${selectedType === "subscription" ? "bg-[#2D3047] text-white" : "bg-white"}
              transition-all duration-200`}
            onClick={() => setSelectedType("subscription")}
          >
            <RadioGroupItem
              value="subscription"
              id="subscription"
              className="absolute right-4 top-4 border-2 border-current"
            />
            <div className="flex flex-col gap-2">
              <Calendar className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-bold font-mono">Subscription Plan</h3>
              <p className="text-sm opacity-80">
                Regular dining experiences with better value and exclusive perks
              </p>
            </div>
          </div>

          {/* Single Dinner Option */}
          <div
            className={`relative p-6 border-2 border-[#2D3047] rounded-lg cursor-pointer
              ${selectedType === "single" ? "bg-[#2D3047] text-white" : "bg-white"}
              transition-all duration-200`}
            onClick={() => setSelectedType("single")}
          >
            <RadioGroupItem
              value="single"
              id="single"
              className="absolute right-4 top-4 border-2 border-current"
            />
            <div className="flex flex-col gap-2">
              <Clock className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-bold font-mono">Single Dinner</h3>
              <p className="text-sm opacity-80">
                Try the experience once before committing to a subscription
              </p>
            </div>
          </div>
        </RadioGroup>

        {/* Subscription Plans */}
        {selectedType === "subscription" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {SUBSCRIPTION_PLANS.map((plan) => (
              <motion.div
                key={plan.duration}
                className={`relative p-6 border-2 ${plan.recommended ? "border-[#F72585]" : "border-[#2D3047]"} 
                  rounded-lg cursor-pointer
                  ${
                    selectedPlan === plan.duration
                      ? "bg-[#2D3047] text-white"
                      : "bg-white"
                  }
                  transition-all duration-200`}
                onClick={() => setSelectedPlan(plan.duration)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F72585] text-white px-3 py-1 rounded-full text-sm font-mono">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold font-mono mb-2">
                      {plan.duration} Month{plan.duration !== "1" && "s"}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">₹{plan.price}</span>
                      <span className="text-sm opacity-70">/plan</span>
                    </div>
                    <div className="text-sm opacity-70 mt-1">
                      ₹{plan.perMonth}/month
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Single Dinner Price */}
        {selectedType === "single" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="max-w-md mx-auto p-6 border-2 border-[#2D3047] rounded-lg bg-[#2D3047] text-white">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold font-mono mb-2">
                  Single Dinner
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold">
                    ₹{SINGLE_DINNER_PRICE}
                  </span>
                  <span className="text-sm opacity-70">/dinner</span>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>One curated dining experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Standard table matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Basic member benefits</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Pay Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isValid ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full bg-[#F72585] hover:bg-[#F72585]/90 text-white text-lg py-6
              border-4 border-[#2D3047] shadow-[8px_8px_0px_0px_rgba(45,48,71,1)]
              transition-all hover:shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]
              hover:-translate-x-1 hover:-translate-y-1"
          >
            Pay Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PricingPlans;
