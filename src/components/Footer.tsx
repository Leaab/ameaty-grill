import { Phone, MessageCircle, MapPin } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  INSTAGRAM,
  FACEBOOK,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/constants";
import { getFloatingWhatsAppUrl } from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-[#D6A11F]/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F8F1E7] tracking-wider">
              Ameaty Grill
            </h3>
            <p className="mt-1 text-xs tracking-[0.25em] uppercase text-[#D6A11F]">
              Private Chef
            </p>
            <p className="mt-4 text-sm text-[#B8A58D] leading-relaxed">
              Chef BBQ privé à domicile en Israël
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F8F1E7] mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 text-sm text-[#B8A58D] hover:text-[#F1C75B] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#D6A11F]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={getFloatingWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#B8A58D] hover:text-[#F1C75B] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#B8A58D] hover:text-[#F1C75B] transition-colors"
                >
                  <InstagramIcon className="h-4 w-4 text-[#D6A11F]" />
                  @{INSTAGRAM}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#B8A58D] hover:text-[#F1C75B] transition-colors"
                >
                  <FacebookIcon className="h-4 w-4 text-[#D6A11F]" />
                  {FACEBOOK}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-[#B8A58D]">
                <MapPin className="h-4 w-4 text-[#D6A11F]" />
                Israël
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <a
              href={getFloatingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D6A11F] bg-[#D6A11F]/10 px-6 py-3 text-sm font-medium text-[#F1C75B] hover:bg-[#D6A11F]/20 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Réserver sur WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#D6A11F]/10 text-center">
          <p className="text-xs text-[#B8A58D]/60">
            © {new Date().getFullYear()} Ameaty Grill — Private Chef BBQ en Israël
          </p>
        </div>
      </div>
    </footer>
  );
}
