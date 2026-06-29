"use client";

import { motion } from "framer-motion";
import { Flame, ChefHat, Sparkles, Beef } from "lucide-react";
import { PremiumImage } from "./PremiumImage";
import { getFloatingWhatsAppUrl } from "@/lib/whatsapp";

const badges = [
  { icon: ChefHat, label: "Chef professionnel" },
  { icon: Sparkles, label: "Prestation sur mesure" },
  { icon: Beef, label: "Viande de qualité כשרות הרב מחפוד" },
  { icon: Flame, label: "Repas sur table possible" },
];

export function Hero() {
  const scrollToExperience = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#070707]"
    >
      <div className="absolute inset-0">
        <PremiumImage
          src="/images/hero-bbq.jpg"
          alt="Table BBQ premium Ameaty Grill"
          fill
          priority
          sizes="100vw"
          gradientVariant="hero"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/85 via-[#070707]/45 to-[#070707]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,161,31,0.1),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6A11F]/30 bg-[#D6A11F]/10 px-4 py-1.5 text-xs sm:text-sm tracking-[0.15em] uppercase text-[#F1C75B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A11F] animate-pulse" />
            Private Chef • BBQ Experience • Israël
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#F8F1E7] max-w-3xl">
            Chef BBQ privé{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1C75B] to-[#D6A11F]">
              à domicile
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-[#B8A58D] max-w-xl">
            Pour tous vos événements en Israël 🔥🇮🇱
          </p>

          <p className="mt-3 text-base sm:text-lg text-[#F8F1E7]/80 max-w-lg">
            On s&apos;occupe de tout, profitez pleinement de votre soirée ✨
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={getFloatingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D6A11F] to-[#F1C75B] px-8 py-4 text-base font-semibold text-[#070707] shadow-lg shadow-[#D6A11F]/25 hover:shadow-[#D6A11F]/40 hover:scale-[1.02] transition-all"
            >
              Réserver sur WhatsApp
            </a>
            <button
              type="button"
              onClick={scrollToExperience}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B8A58D]/40 bg-white/5 px-8 py-4 text-base font-medium text-[#F8F1E7] hover:border-[#D6A11F]/50 hover:bg-white/10 transition-all"
            >
              Découvrir l&apos;expérience
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 rounded-xl border border-[#D6A11F]/15 bg-[#15110F]/60 backdrop-blur-sm px-4 py-3"
              >
                <Icon className="h-5 w-5 shrink-0 text-[#D6A11F]" />
                <span className="text-sm text-[#F8F1E7]/90">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
    </section>
  );
}
