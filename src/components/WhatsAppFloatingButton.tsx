"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function WhatsAppFloatingButton() {
  const { openBooking } = useBooking();

  return (
    <motion.button
      type="button"
      onClick={openBooking}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D6A11F] to-[#F1C75B] px-5 py-3.5 text-sm font-semibold text-[#070707] shadow-lg shadow-[#D6A11F]/30 hover:shadow-[#D6A11F]/50 transition-shadow sm:bottom-6 sm:right-6"
      aria-label="Réserver — ouvrir le formulaire"
    >
      <CalendarCheck className="h-5 w-5" />
      <span>Réserver</span>
    </motion.button>
  );
}
