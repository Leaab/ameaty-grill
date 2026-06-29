"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  gradientVariant?: "hero" | "gallery" | "card";
}

const gradientVariants = {
  hero: "from-[#070707] via-[#241713] to-[#15110F]",
  gallery: "from-[#15110F] via-[#241713] to-[#070707]",
  card: "from-[#241713] via-[#15110F] to-[#070707]",
};

export function PremiumImage({
  src,
  alt,
  className,
  fill = false,
  priority = false,
  sizes,
  caption,
  gradientVariant = "gallery",
}: PremiumImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            gradientVariants[gradientVariant]
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(214,161,31,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(182,56,36,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0iYSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4zNSIvPjwvc3ZnPg==')]" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-[#070707]/20 to-transparent" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="font-serif text-lg sm:text-xl text-[#F1C75B] tracking-wide">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
