import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface OTPInputProps {
  mobile: string;
  onSubmit: (otp: string) => void;
  onResend: () => void;
}

const OTPInput = ({ mobile, onSubmit, onResend }: OTPInputProps) => {
  const [otp, setOtp] = React.useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = React.useState(300); // 5 minutes in seconds
  const refs = Array.from({ length: 4 }, () =>
    React.useRef<HTMLInputElement>(null),
  );

  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(300);
    onResend();
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      refs[index + 1].current?.focus();
    }

    // Submit if all digits are filled
    if (newOtp.every((digit) => digit) && value) {
      onSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 bg-[#FFEDD5] min-h-screen flex flex-col">
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
          <h2 className="text-xl font-mono text-[#2D3047]">VERIFY OTP</h2>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#2D3047] mb-12">
          <div className="h-full w-full bg-[#2EC4B6]" />
        </div>

        {/* Title and subtitle */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3047] font-mono mb-4">
            ENTER <span className="italic">OTP</span>
          </h1>
          <p className="text-[#2D3047]/70">
            We've sent a 4-digit code to {mobile}
          </p>
        </div>

        {/* OTP input grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              ref={refs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-full aspect-square text-3xl font-mono text-center
                border-2 border-[#2D3047] rounded-lg bg-white
                focus:ring-2 focus:ring-[#2EC4B6] focus:border-[#2EC4B6]"
              whileFocus={{ scale: 1.05 }}
            />
          ))}
        </div>

        {/* Timer and resend */}
        <div className="text-center mb-8">
          {timeLeft > 0 ? (
            <p className="text-[#2D3047]/70">
              OTP valid for {formatTime(timeLeft)}
            </p>
          ) : (
            <Button
              variant="ghost"
              onClick={handleResend}
              className="text-[#2EC4B6] hover:text-[#2EC4B6]/70"
            >
              Resend OTP
            </Button>
          )}
        </div>

        {/* Submit button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: otp.every((digit) => digit) ? 1 : 0.5 }}
        >
          <Button
            onClick={() => onSubmit(otp.join(""))}
            disabled={!otp.every((digit) => digit)}
            className="w-full bg-[#2D3047] text-white text-lg py-6
              hover:bg-[#2D3047]/90 transition-all"
          >
            Verify & Continue
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OTPInput;
