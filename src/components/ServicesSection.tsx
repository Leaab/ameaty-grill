"use client";

import { motion } from "framer-motion";
import { Flame, Users, Briefcase, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "BBQ privé à domicile",
    text: "Le chef se déplace chez vous avec tout le nécessaire pour une soirée conviviale et premium.",
  },
  {
    icon: Users,
    title: "Événements privés",
    text: "Anniversaires, fêtes, soirées entre amis, repas de famille ou célébrations.",
  },
  {
    icon: Briefcase,
    title: "Événements professionnels",
    text: "Repas d'équipe, soirées d'entreprise, réceptions et événements clients.",
  },
  {
    icon: UtensilsCrossed,
    title: "Repas sur table",
    text: "Possibilité de créer une expérience plus élégante avec service à table.",
  },
];

export function ServicesSection() {
  return (
    <section id="prestations" className="relative py-16 sm:py-24 bg-[#15110F]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(214,161,31,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-3">
            Prestations
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7] mb-4">
            Nos prestations
          </h2>
          <p className="text-[#B8A58D] max-w-xl mx-auto">
            Des formules adaptées à votre événement, à votre budget et à vos invités.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex gap-5 rounded-2xl border border-[#D6A11F]/10 bg-[#070707]/60 p-6 sm:p-8 hover:border-[#D6A11F]/30 transition-all"
            >
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-[#D6A11F]/20 to-[#B63824]/10 p-4 h-fit text-[#F1C75B] group-hover:scale-105 transition-transform">
                <service.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F8F1E7] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#B8A58D]">{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
