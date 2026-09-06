// Course inquiries WhatsApp number in international format (no leading +).
export const WHATSAPP_NUMBER = '201003985849';

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
