"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { BookingFormFields } from "./BookingFormFields";

interface BookingContextValue {
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}

function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#070707]/85 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Fermer le formulaire"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl max-h-[92svh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[#D6A11F]/20 bg-[#15110F] shadow-2xl shadow-black/60"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#D6A11F]/10 bg-[#15110F]/95 backdrop-blur-md px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-1">
                  Réservation
                </p>
                <h2
                  id="booking-modal-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#F8F1E7]"
                >
                  Demander une réservation
                </h2>
                <p className="mt-1 text-sm text-[#B8A58D]">
                  Remplissez votre événement, puis envoyez sur WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full p-2 text-[#B8A58D] hover:bg-white/5 hover:text-[#F8F1E7] transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <BookingFormFields
                idPrefix="modal"
                onSubmitted={onClose}
                className="border-0 bg-transparent p-0 sm:p-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
