import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const FLOATING_WHATSAPP_MESSAGE =
  "Bonjour Yonathan, je souhaite avoir des informations pour une prestation Ameaty Grill 🔥";

export function getFloatingWhatsAppUrl(): string {
  return buildWhatsAppUrl(FLOATING_WHATSAPP_MESSAGE);
}

export interface BookingFormData {
  nom: string;
  telephone: string;
  date: string;
  heure: string;
  lieu: string;
  invites: string;
  eventType: string;
  format: string;
  budget: string;
  remarks: string;
}

export function buildBookingWhatsAppMessage(data: BookingFormData): string {
  return `Bonjour Yonathan,

Je souhaite avoir des informations pour une prestation Ameaty Grill 🔥

Nom : ${data.nom}
Téléphone : ${data.telephone}
Date souhaitée : ${data.date}
Heure souhaitée : ${data.heure}
Lieu / ville : ${data.lieu}
Nombre d'invités : ${data.invites}

Type d'événement : ${data.eventType}
Format souhaité : ${data.format}
Budget approximatif : ${data.budget}

Remarques :
${data.remarks || "—"}

Merci de me confirmer la disponibilité et les possibilités 😊`;
}
