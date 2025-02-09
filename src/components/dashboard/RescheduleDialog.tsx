import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface RescheduleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: Date) => void;
}

const RescheduleDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: RescheduleDialogProps) => {
  const [date, setDate] = React.useState<Date>();

  const handleConfirm = () => {
    if (date) {
      onConfirm(date);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono">Reschedule Dinner</DialogTitle>
          <DialogDescription>
            Pick a new date for your dinner. Available slots will be shown in
            the calendar.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border-2 border-[#2D3047]"
          />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-2 border-[#2D3047]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!date}
            className="bg-[#2D3047] text-white hover:bg-[#2D3047]/90"
          >
            Confirm New Date
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleDialog;
