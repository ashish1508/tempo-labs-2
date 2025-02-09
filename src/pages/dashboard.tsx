import React from "react";
import { motion } from "framer-motion";
import BottomNav from "@/components/navigation/BottomNav";
import MeetingCard from "@/components/dashboard/MeetingCard";
import RescheduleDialog from "@/components/dashboard/RescheduleDialog";
import CancelDialog from "@/components/dashboard/CancelDialog";

interface Meeting {
  id: number;
  date: string;
  time: string;
  location: string;
  status: string;
  groupRevealDate: string;
  restaurantRevealDate: string;
}

const DashboardPage = () => {
  const [selectedMeetingId, setSelectedMeetingId] = React.useState<
    number | null
  >(null);
  const [isRescheduleOpen, setIsRescheduleOpen] = React.useState(false);
  const [isCancelOpen, setIsCancelOpen] = React.useState(false);

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
    <div className="min-h-screen bg-[#FFEDD5] pb-20 flex justify-center">
      <div className="w-full max-w-md">
        <header className="bg-[#2D3047] text-white py-6 px-4">
          <h1 className="text-2xl font-bold font-mono">Your Dinners</h1>
        </header>

        <div className="p-4 space-y-6">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
              onReschedule={(id) => {
                setSelectedMeetingId(id);
                setIsRescheduleOpen(true);
              }}
              onCancel={(id) => {
                setSelectedMeetingId(id);
                setIsCancelOpen(true);
              }}
            />
          ))}
        </div>

        <RescheduleDialog
          isOpen={isRescheduleOpen}
          onClose={() => setIsRescheduleOpen(false)}
          onConfirm={(date) => {
            console.log(`Rescheduling meeting ${selectedMeetingId} to ${date}`);
            setIsRescheduleOpen(false);
          }}
        />

        <CancelDialog
          isOpen={isCancelOpen}
          onClose={() => setIsCancelOpen(false)}
          onConfirm={() => {
            console.log(`Cancelling meeting ${selectedMeetingId}`);
            setIsCancelOpen(false);
          }}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default DashboardPage;
