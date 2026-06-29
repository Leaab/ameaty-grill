import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ameaty Grill | Chef BBQ privé à domicile en Israël",
  description:
    "Chef BBQ privé à domicile pour événements en Israël. Viandes de qualité, prestation sur mesure, repas sur table possible et réservation via WhatsApp.",
  openGraph: {
    title: "Ameaty Grill | Private Chef BBQ en Israël",
    description:
      "Une expérience BBQ privée, conviviale et sans stress pour vos événements en Israël.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070707] text-[#F8F1E7] antialiased">
        {children}
      </body>
    </html>
  );
}
