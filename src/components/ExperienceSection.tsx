"use client";

import { motion } from "framer-motion";
import { PremiumImage } from "./PremiumImage";

const steps = [
  {
    number: "01",
    title: "Vous envoyez votre demande",
    text: "Date, lieu, nombre d'invités et style d'événement.",
  },
  {
    number: "02",
    title: "On prépare une prestation sur mesure",
    text: "Le menu et le format sont adaptés à votre soirée.",
  },
  {
    number: "03",
    title: "Vous profitez",
    text: "Le chef s'occupe de la cuisson, du service et de l'expérience.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 bg-[#15110F] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(182,56,36,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-3">
              Expérience
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7] leading-tight mb-6">
              Une expérience conviviale, festive et sans stress 🔥
            </h2>
            <p className="text-[#B8A58D] leading-relaxed mb-10">
              Ameaty Grill transforme votre événement en vraie expérience BBQ privée :
              de belles viandes, une cuisson maîtrisée, une ambiance chaleureuse et une
              prestation pensée pour que vous n&apos;ayez rien à gérer.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="font-serif text-2xl font-bold text-[#D6A11F]/60 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#F8F1E7] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#B8A58D]">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-[#D6A11F]/20 shadow-2xl shadow-black/50 group"
          >
            <PremiumImage
              src="/images/private-chef.jpg"
              alt="Chef privé Ameaty Grill"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              gradientVariant="card"
              className="h-full w-full"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#D6A11F]/10 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
