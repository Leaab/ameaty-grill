"use client";

import { motion } from "framer-motion";
import { Sparkles, ChefHat, Settings2, UtensilsCrossed } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "On s'occupe de tout",
    text: "Installation, cuisson, service et ambiance : vous profitez, on gère le reste.",
  },
  {
    icon: ChefHat,
    title: "Chef professionnel",
    text: "Une prestation maîtrisée pour un résultat gourmand, généreux et élégant.",
  },
  {
    icon: Settings2,
    title: "Sur mesure",
    text: "Chaque événement est adapté à vos envies, au nombre d'invités et au style de la soirée.",
  },
  {
    icon: UtensilsCrossed,
    title: "Repas sur table possible",
    text: "Format buffet, grill live ou repas servi à table selon votre événement.",
  },
];

export function TrustBadges() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7] leading-tight max-w-3xl mx-auto">
            Une soirée sans stress,{" "}
            <span className="text-[#F1C75B]">une expérience inoubliable</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-[#D6A11F]/15 bg-gradient-to-b from-[#15110F] to-[#070707] p-6 hover:border-[#D6A11F]/35 transition-all duration-300"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#D6A11F]/10 p-3 text-[#D6A11F] group-hover:bg-[#D6A11F]/20 transition-colors">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#F8F1E7] mb-2">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#B8A58D]">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
