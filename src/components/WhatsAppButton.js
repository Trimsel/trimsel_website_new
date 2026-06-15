"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent("whatsapp_click", {
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <a
      href="https://wa.me/917200841581"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[9999] transition-transform duration-200 hover:scale-105"
    >
      <Image
        src="/icons/whatsappicon.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </a>
  );
}
