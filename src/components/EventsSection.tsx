"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Cake,
  Users,
  PartyPopper,
  Briefcase,
  Home,
} from "lucide-react";

const events = [
  { icon: Heart, label: "Mariages" },
  { icon: Cake, label: "Anniversaires" },
  { icon: Users, label: "Événements privés" },
  { icon: PartyPopper, label: "Fêtes & soirées" },
  { icon: Briefcase, label: "Événements professionnels" },
  { icon: Home, label: "Repas de famille" },
];

export function EventsSection() {
  return (
    <section id="evenements" className="relative py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-3">
            Événements
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7]">
            Pour tous vos événements
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#D6A11F]/25 bg-[#15110F] text-[#D6A11F] group-hover:border-[#F1C75B]/50 group-hover:bg-[#D6A11F]/10 group-hover:text-[#F1C75B] transition-all duration-300">
                <event.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#B8A58D] group-hover:text-[#F8F1E7] transition-colors leading-tight">
                {event.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
