import type { Locale } from '@/lib/i18n';

// Single source of truth for contact details (layout JSON-LD, footer, contact page, translations).
export const CONTACTS = {
  phone: '+79267291313',
  phoneDisplay: '+7 926 729 13 13',
  email: 'ann.massage@icloud.com',
  telegram: 'https://t.me/AnnaZakernichnaia',
  telegramHandle: '@AnnaZakernichnaia',
  whatsapp: 'https://wa.me/79267291313',
  instagram: 'https://www.instagram.com/annabody.studio',
} as const;

// Where "Book" buttons go. Russian-speaking visitors mostly use Telegram, so open the chat
// directly; everyone else gets the contact page and picks a channel (WhatsApp, email...).
export const bookingLink = (locale: Locale) =>
  locale === 'ru'
    ? { href: CONTACTS.telegram, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '/contact/' };
