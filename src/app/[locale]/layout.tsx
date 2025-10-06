import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from '@/src/messages';
import { notFound } from 'next/navigation';
import Navigation from '@/src/app/components/Navigation';
import Footer from '@/src/app/components/Footer';

const locales = ['en', 'fr'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client side
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Navigation />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}