/**
 * Número WhatsApp en formato E.164 sin + (ej: 573001234567).
 * Configura NEXT_PUBLIC_WHATSAPP_NUMBER en .env.local para tu número real.
 */
export const WHATSAPP_E164 =
  (typeof process !== 'undefined' &&
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')) ||
  '573133099743';

/** Texto mostrado en la UI; opcional NEXT_PUBLIC_DISPLAY_PHONE */
export const DISPLAY_PHONE =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_DISPLAY_PHONE) || '+57 313 309 9743';

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
