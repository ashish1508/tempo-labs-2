import React from "react";
import MobileNumberInput from "@/components/auth/MobileNumberInput";
import OTPInput from "@/components/auth/OTPInput";

type Step = "mobile" | "otp";

const LoginPage = () => {
  const [step, setStep] = React.useState<Step>("mobile");
  const [mobile, setMobile] = React.useState("");

  const handleMobileSubmit = (mobileNumber: string) => {
    setMobile(mobileNumber);
    // Here you would typically make an API call to send OTP
    console.log("Sending OTP to", mobileNumber);
    setStep("otp");
  };

  const handleOTPSubmit = (otp: string) => {
    // Here you would typically verify the OTP
    console.log("Verifying OTP", otp, "for mobile", mobile);
  };

  const handleResendOTP = () => {
    // Here you would typically make an API call to resend OTP
    console.log("Resending OTP to", mobile);
  };

  return (
    <div className="min-h-screen bg-[#FFEDD5]">
      {step === "mobile" && <MobileNumberInput onSubmit={handleMobileSubmit} />}
      {step === "otp" && (
        <OTPInput
          mobile={mobile}
          onSubmit={handleOTPSubmit}
          onResend={handleResendOTP}
        />
      )}
    </div>
  );
};

export default LoginPage;
