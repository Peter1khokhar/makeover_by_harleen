/** Replace with your salon WhatsApp number (country code, no + or spaces). */


export const WHATSAPP_NUMBER = '917710696377'
export const SALON_NAME = 'Makeover By Harleen'
export const SALON_TAGLINE = 'Lets Redefine your Beauty'
export const SALON_ADDRESS = 'MAIN BAZAR ,SHIWALA CHOWNK ,QADIAN'
export const SALON_EMAIL = 'makeoverbyharleen@gmail.com'
export const SALON_PHONE = '+917710696377'


export function whatsappBookingUrl(message?: string) {
  const text =
    message ??
    `Hello ${SALON_NAME}, I would like to book an appointment.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
