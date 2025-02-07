import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#011627] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center font-mono leading-tight max-w-4xl">
        JOIN DINNERS WITH 5
        <br />
        AMAZING STRANGERS
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Button
          onClick={() => navigate("/signup")}
          className="bg-[#E71D36] hover:bg-[#FF5C5C] text-white text-lg px-8 py-6 rounded-none border-4 border-[#2D3047] shadow-[8px_8px_0px_0px_rgba(45,48,71,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(45,48,71,1)] hover:-translate-x-1 hover:-translate-y-1"
        >
          Get started
        </Button>

        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          className="bg-transparent text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none border-4 border-white"
        >
          I already have an account
        </Button>
      </div>

      <p className="text-white/70 text-sm mt-8 text-center">
        By signing up you agree to the{" "}
        <a href="/terms" className="underline hover:text-white">
          Terms of Service
        </a>
        ,{" "}
        <a href="/privacy" className="underline hover:text-white">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/guidelines" className="underline hover:text-white">
          Community Guidelines
        </a>
      </p>
    </div>
  );
};

export default AuthPage;
