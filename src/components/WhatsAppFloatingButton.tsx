"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getFloatingWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={getFloatingWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow sm:bottom-6 sm:right-6"
      aria-label="Réserver sur WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span>Réserver</span>
    </motion.a>
  );
}
