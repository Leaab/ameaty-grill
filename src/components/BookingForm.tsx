"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { EVENT_TYPES, FORMAT_TYPES } from "@/lib/constants";
import {
  buildBookingWhatsAppMessage,
  buildWhatsAppUrl,
  type BookingFormData,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const initialForm: BookingFormData = {
  nom: "",
  telephone: "",
  date: "",
  heure: "",
  lieu: "",
  invites: "",
  eventType: EVENT_TYPES[0],
  format: FORMAT_TYPES[0],
  budget: "",
  remarks: "",
};

const inputClass =
  "w-full rounded-xl border border-[#D6A11F]/20 bg-[#070707]/80 px-4 py-3 text-[#F8F1E7] placeholder:text-[#B8A58D]/50 focus:border-[#D6A11F]/50 focus:outline-none focus:ring-1 focus:ring-[#D6A11F]/30 transition-colors";

const labelClass = "block text-sm font-medium text-[#B8A58D] mb-1.5";

export function BookingForm() {
  const [form, setForm] = useState<BookingFormData>(initialForm);

  const updateField = <K extends keyof BookingFormData>(
    key: K,
    value: BookingFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = buildBookingWhatsAppMessage(form);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

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

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#D6A11F]/15 bg-[#070707]/60 p-6 sm:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nom" className={labelClass}>
                Nom *
              </label>
              <input
                id="nom"
                type="text"
                required
                value={form.nom}
                onChange={(e) => updateField("nom", e.target.value)}
                className={inputClass}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="telephone" className={labelClass}>
                Téléphone *
              </label>
              <input
                id="telephone"
                type="tel"
                required
                value={form.telephone}
                onChange={(e) => updateField("telephone", e.target.value)}
                className={inputClass}
                placeholder="054-000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className={labelClass}>
                Date souhaitée *
              </label>
              <input
                id="date"
                type="date"
                required
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                className={cn(inputClass, "[color-scheme:dark]")}
              />
            </div>
            <div>
              <label htmlFor="heure" className={labelClass}>
                Heure souhaitée *
              </label>
              <input
                id="heure"
                type="time"
                required
                value={form.heure}
                onChange={(e) => updateField("heure", e.target.value)}
                className={cn(inputClass, "[color-scheme:dark]")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="lieu" className={labelClass}>
                Ville / lieu de l&apos;événement *
              </label>
              <input
                id="lieu"
                type="text"
                required
                value={form.lieu}
                onChange={(e) => updateField("lieu", e.target.value)}
                className={inputClass}
                placeholder="Tel Aviv, Herzliya..."
              />
            </div>
            <div>
              <label htmlFor="invites" className={labelClass}>
                Nombre d&apos;invités *
              </label>
              <input
                id="invites"
                type="number"
                required
                min={1}
                value={form.invites}
                onChange={(e) => updateField("invites", e.target.value)}
                className={inputClass}
                placeholder="20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="eventType" className={labelClass}>
                Type d&apos;événement *
              </label>
              <select
                id="eventType"
                required
                value={form.eventType}
                onChange={(e) => updateField("eventType", e.target.value)}
                className={cn(inputClass, "cursor-pointer")}
              >
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="format" className={labelClass}>
                Format souhaité *
              </label>
              <select
                id="format"
                required
                value={form.format}
                onChange={(e) => updateField("format", e.target.value)}
                className={cn(inputClass, "cursor-pointer")}
              >
                {FORMAT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget approximatif
            </label>
            <input
              id="budget"
              type="text"
              value={form.budget}
              onChange={(e) => updateField("budget", e.target.value)}
              className={inputClass}
              placeholder="Ex : 5000 ₪"
            />
          </div>

          <div>
            <label htmlFor="remarks" className={labelClass}>
              Besoin particulier / remarques
            </label>
            <textarea
              id="remarks"
              rows={4}
              value={form.remarks}
              onChange={(e) => updateField("remarks", e.target.value)}
              className={cn(inputClass, "resize-none")}
              placeholder="Allergies, préférences, demandes spéciales..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D6A11F] to-[#F1C75B] px-8 py-4 text-base font-semibold text-[#070707] shadow-lg shadow-[#D6A11F]/20 hover:shadow-[#D6A11F]/40 hover:scale-[1.01] transition-all"
          >
            <Send className="h-5 w-5" />
            Envoyer ma demande sur WhatsApp
          </button>

          <p className="text-center text-xs text-[#B8A58D]/70">
            Pour toute réservation : Yonathan — 054-968-6221
          </p>
        </motion.form>
      </div>
    </section>
  );
}
