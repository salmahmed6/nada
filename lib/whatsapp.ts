// Instructor's WhatsApp number in international format (no leading +).
export const WHATSAPP_NUMBER = '2010003985849';

/**
 * Builds a wa.me link that opens a WhatsApp chat with the instructor,
 * pre-filled with a message (e.g. naming the course the student picked).
 */
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
