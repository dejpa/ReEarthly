import { getTranslations } from 'next-intl/server';

export async function getMessages(locale: string) {
  try {
    const [home, navigation, footer, about] = await Promise.all([
      import(`@/src/locales/${locale}/home.json`),
      import(`@/src/locales/${locale}/navigation.json`),
      import(`@/src/locales/${locale}/footer.json`),
      import(`@/src/locales/${locale}/about.json`)
    ]);

    return {
      ...home.default,
      ...navigation.default,
      ...footer.default,
      ...about.default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to English
    const [home, navigation, footer, about] = await Promise.all([
      import(`@/src/locales/en/home.json`),
      import(`@/src/locales/en/navigation.json`),
      import(`@/src/locales/en/footer.json`),
      import(`@/src/locales/en/about.json`)
    ]);

    return {
      ...home.default,
      ...navigation.default,
      ...footer.default,
      ...about.default
    };
  }
}
