"use client";

import { motion } from "framer-motion";
import { PremiumImage } from "./PremiumImage";

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Viandes d'exception", caption: "Viandes d'exception" },
  { src: "/images/gallery-2.jpg", alt: "Cuisson maîtrisée", caption: "Cuisson maîtrisée" },
  { src: "/images/gallery-3.jpg", alt: "Saveurs inoubliables", caption: "Saveurs inoubliables" },
  { src: "/images/meat-table.jpg", alt: "Soirées privées", caption: "Soirées privées" },
  { src: "/images/event-table.jpg", alt: "Événements pro", caption: "Événements pro" },
  { src: "/images/bbq-fire.jpg", alt: "Ambiance grill", caption: "Ambiance grill" },
];

export function GallerySection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#070707]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D6A11F] mb-3">
            Galerie
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F1E7]">
            L&apos;ambiance Ameaty Grill
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl border border-[#D6A11F]/10 ${
                i === 0 ? "sm:col-span-2 sm:row-span-1 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <PremiumImage
                src={item.src}
                alt={item.alt}
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                gradientVariant="gallery"
                caption={item.caption}
                className="h-full w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
