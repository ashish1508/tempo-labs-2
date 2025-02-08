import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format, addWeeks, isWednesday, isSaturday } from "date-fns";
import { Calendar, Clock } from "lucide-react";

interface DiningDateSelectProps {
  onNext: (dates: string[]) => void;
}

const DiningDateSelect = ({ onNext }: DiningDateSelectProps) => {
  const [selectedDates, setSelectedDates] = React.useState<string[]>([]);

  // Generate available dates (next 3 weeks of Wednesdays and Saturdays)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    const threeWeeksLater = addWeeks(today, 3);

    for (let d = today; d <= threeWeeksLater; d.setDate(d.getDate() + 1)) {
      if ((isWednesday(d) || isSaturday(d)) && d > today) {
        dates.push(new Date(d));
      }
    }

    return dates;
  };

  const availableDates = React.useMemo(getAvailableDates, []);

  const toggleDate = (date: string) => {
    setSelectedDates((prev) => {
      if (prev.includes(date)) {
        return prev.filter((d) => d !== date);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, date];
    });
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
          <h2 className="text-xl font-mono text-[#2D3047]">DINING DATES</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-[80%] bg-[#2EC4B6]" />
        </div>

        {/* Title and subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono mb-4">
            WHEN WOULD YOU LIKE TO <span className="italic">DINE</span>?
          </h1>
          <p className="text-[#2D3047]/70">
            Select up to 3 preferred dates for your dining experience
          </p>
        </div>

        {/* Selected dates */}
        {selectedDates.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {selectedDates.map((date) => (
              <Badge
                key={date}
                className="bg-[#2EC4B6] text-white px-3 py-1.5 flex items-center gap-2
                  border-2 border-[#2D3047] font-mono"
              >
                {format(new Date(date), "EEE, MMM d")}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Available dates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {availableDates.map((date) => {
            const dateStr = date.toISOString();
            const isSelected = selectedDates.includes(dateStr);

            return (
              <motion.button
                key={dateStr}
                onClick={() => toggleDate(dateStr)}
                className={`p-6 border-2 border-[#2D3047] rounded-lg
                  ${isSelected ? "bg-[#2D3047] text-white" : "bg-white"}
                  ${
                    selectedDates.length >= 3 && !isSelected
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#2D3047]/5"
                  }
                  transition-all duration-200`}
                whileHover={
                  selectedDates.length < 3 || isSelected ? { scale: 1.02 } : {}
                }
                whileTap={
                  selectedDates.length < 3 || isSelected ? { scale: 0.98 } : {}
                }
              >
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg font-mono">
                    {format(date, "EEEE, MMMM d")}
                  </span>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <Clock className="w-4 h-4" />
                    <span>7:00 PM</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedDates.length > 0 ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => selectedDates.length && onNext(selectedDates)}
            disabled={!selectedDates.length}
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

export default DiningDateSelect;
