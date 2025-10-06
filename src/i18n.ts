import { getRequestConfig } from 'next-intl/server';
import { getMessages } from './messages';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || 'en';
  return {
    locale: validLocale,
    messages: await getMessages(validLocale)
  };
});

// Helper function for number formatting
export const formatNumber = (num: number, locale = 'en') => {
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'fr-FR').format(num);
};
