"use client";

import { useState } from "react";
import { X, Send, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Partnership / Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate sending message or integration
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "Partnership / Inquiry", message: "" });
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#151515] border border-[#292929] rounded-sm p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#999999] hover:text-[#E8E2DA] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#B47B70] uppercase tracking-widest mb-1">
            — Direct Contact
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wide text-[#E8E2DA]">
            CONNECT WITH THE 420 STREET TEAM
          </h3>
          <p className="text-xs text-[#999999] mt-1">
            Partnership inquiries, press, or platform questions.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-12 text-center flex flex-col items-center justify-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-[#B47B70]" />
            <h4 className="text-base font-bold uppercase text-[#E8E2DA]">Message Sent!</h4>
            <p className="text-xs text-[#999999]">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#E8E2DA]/80 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name..."
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#292929] focus:border-[#B47B70] text-xs text-[#E8E2DA] placeholder-[#999999] rounded-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#E8E2DA]/80 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#292929] focus:border-[#B47B70] text-xs text-[#E8E2DA] placeholder-[#999999] rounded-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#E8E2DA]/80 mb-1">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#292929] focus:border-[#B47B70] text-xs text-[#E8E2DA] rounded-sm focus:outline-none"
              >
                <option value="Partnership / Inquiry">Partnership &amp; Business Opportunities</option>
                <option value="VIP Access Request">VIP Member Access Request</option>
                <option value="Press / Media">Press &amp; Media Inquiries</option>
                <option value="General Question">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#E8E2DA]/80 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Details of your request..."
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#292929] focus:border-[#B47B70] text-xs text-[#E8E2DA] placeholder-[#999999] rounded-sm focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#B47B70] hover:bg-[#79514B] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Modal Footer Info */}
        <div className="mt-6 pt-4 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#999999] font-mono gap-2">
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#B47B70]" /> contact@420street.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#B47B70]" /> Paris / Digital Hub
          </span>
        </div>
      </div>
    </div>
  );
}
