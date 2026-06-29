"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getFloatingWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "#experience", label: "Expérience" },
  { href: "#prestations", label: "Prestations" },
  { href: "#evenements", label: "Événements" },
  { href: "#reserver", label: "Réserver" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#070707]/95 backdrop-blur-md border-b border-[#D6A11F]/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="group text-left"
          aria-label="Ameaty Grill — accueil"
        >
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F8F1E7] group-hover:text-[#F1C75B] transition-colors">
            Ameaty Grill
          </span>
          <span className="block text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#D6A11F]">
            Private Chef
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-wide text-[#B8A58D] hover:text-[#F1C75B] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={getFloatingWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#D6A11F] bg-[#D6A11F]/10 px-5 py-2.5 text-sm font-medium text-[#F1C75B] hover:bg-[#D6A11F]/20 transition-all"
          >
            <Phone className="h-4 w-4" />
            Réserver maintenant
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={getFloatingWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#D6A11F] bg-[#D6A11F]/15 p-2.5 text-[#F1C75B]"
            aria-label="Réserver sur WhatsApp"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#F8F1E7] hover:bg-white/5"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-[#D6A11F]/10 bg-[#070707]/98 backdrop-blur-lg"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-[#F8F1E7] hover:bg-white/5 hover:text-[#F1C75B] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={getFloatingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#D6A11F] bg-[#D6A11F]/15 px-5 py-3 text-[#F1C75B] font-medium"
              >
                <Phone className="h-4 w-4" />
                Réserver maintenant
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
