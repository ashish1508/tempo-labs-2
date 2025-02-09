import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import BottomNav from "@/components/navigation/BottomNav";

const DashboardPage = () => {
  const meetings = [
    {
      id: 1,
      date: "Wednesday, February 12",
      time: "8:00 PM",
      location: "Miami (Brickell/Downtown)",
      status: "confirmed",
      groupRevealDate: "Tuesday, February 11, 7:00 PM",
      restaurantRevealDate: "Wednesday, February 12, 9:00 AM",
    },
    // Add more meetings as needed
  ];

  return (
    <div className="min-h-screen bg-[#FFEDD5] pb-20">
      <header className="bg-[#2D3047] text-white py-6 px-4">
        <h1 className="text-2xl font-bold font-mono">Your Dinners</h1>
      </header>

      <div className="p-4 space-y-6">
        {meetings.map((meeting) => (
          <motion.div
            key={meeting.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg overflow-hidden border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
          >
            {/* Status Bar */}
            <div className="bg-[#00BFA6] p-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white font-mono">
                Your seat is confirmed
              </span>
            </div>

            {/* Meeting Details */}
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-mono text-lg font-bold">Date</h3>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#2D3047]" />
                  <span>
                    {meeting.date}, {meeting.time}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-mono text-lg font-bold">Location</h3>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#2D3047]" />
                  <span>{meeting.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-4">
                <button className="w-full bg-[#2D3047] text-white py-3 rounded-lg font-mono">
                  Add to calendar
                </button>
                <button className="w-full border-2 border-[#2D3047] py-3 rounded-lg font-mono">
                  Reschedule
                </button>
                <button className="w-full text-[#E71D36] py-3 font-mono underline">
                  Cancel
                </button>
              </div>

              {/* Upcoming Reveals */}
              <div className="space-y-4 pt-4 border-t-2 border-dashed border-[#2D3047]">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#FF9F1C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono font-bold">Your group</h4>
                    <p className="text-sm">Find out more about your group on</p>
                    <p className="text-sm font-bold">
                      {meeting.groupRevealDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF9F1C] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono font-bold">Your restaurant</h4>
                    <p className="text-sm">Get your dinner location on</p>
                    <p className="text-sm font-bold">
                      {meeting.restaurantRevealDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default DashboardPage;
