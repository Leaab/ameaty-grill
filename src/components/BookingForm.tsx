"use client";

import { motion } from "framer-motion";
import { BookingFormFields } from "./BookingFormFields";

export function BookingForm() {
  return (
    <section id="reserver" className="relative py-16 sm:py-24 bg-[#15110F]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(214,161,31,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-3">
            Réservation
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7] mb-4">
            Demander une réservation
          </h2>
          <p className="text-[#B8A58D] max-w-lg mx-auto">
            Remplissez les informations de votre événement et envoyez votre demande
            directement sur WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <BookingFormFields idPrefix="section" />
        </motion.div>
      </div>
    </section>
  );
}
