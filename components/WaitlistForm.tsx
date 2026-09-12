"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  buttonText?: string;
  placeholderText?: string;
  className?: string;
}

export default function WaitlistForm({
  buttonText = "Request Early Access",
  placeholderText = "Enter institutional or business email...",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Registration successful!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "An error occurred, please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Unable to connect to the server. Please check your network.");
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder={placeholderText}
            disabled={status === "loading"}
            required
            className="w-full px-5 py-4 bg-[#151515] border border-[#292929] focus:border-[#B47B70] text-[#E8E2DA] placeholder-[#555555] rounded-sm text-sm focus:outline-none transition-all duration-300 shadow-inner"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-[#B47B70] hover:bg-[#79514B] active:bg-[#79514B] text-[#0A0A0A] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg shadow-[#B47B70]/10 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      {/* Feedback Messages */}
      {status === "success" && (
        <div className="mt-3 p-3 bg-[#151515] border border-[#B47B70]/40 rounded-sm flex items-center gap-2 text-xs text-[#E8E2DA]">
          <CheckCircle2 className="w-4 h-4 text-[#B47B70] shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="mt-3 p-3 bg-[#151515] border border-red-500/40 rounded-sm flex items-center gap-2 text-xs text-red-400">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      <p className="mt-3 text-[11px] text-[#555555] flex items-center gap-1.5 font-mono">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#79514B]"></span>
        Restricted access. Your data remains strictly confidential and will never be shared.
      </p>
    </div>
  );
}
