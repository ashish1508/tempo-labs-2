import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Meeting {
  id: number;
  date: string;
  time: string;
  location: string;
  status: string;
}

interface MeetingCardProps {
  meeting: Meeting;
  onReschedule: (id: number) => void;
  onCancel: (id: number) => void;
}

const MeetingCard = ({ meeting, onReschedule, onCancel }: MeetingCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)]"
    >
      {/* Status Bar */}
      <div className="bg-[#00BFA6] p-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-white font-mono">Your seat is confirmed</span>
      </div>

      {/* Meeting Details */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#2D3047]" />
            <span>
              {meeting.date}, {meeting.time}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#2D3047]" />
            <span>{meeting.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => onReschedule(meeting.id)}
            className="border-2 border-[#2D3047] hover:bg-[#2D3047] hover:text-white"
          >
            Reschedule
          </Button>
          <Button
            variant="ghost"
            onClick={() => onCancel(meeting.id)}
            className="text-[#E71D36] hover:text-[#E71D36]/80"
          >
            Cancel
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MeetingCard;
