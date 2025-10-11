import { getTranslations } from 'next-intl/server';

export async function getMessages(locale: string) {
  try {
    const [home, navigation, footer, about, solutions] = await Promise.all([
      import(`@/src/locales/${locale}/home.json`),
      import(`@/src/locales/${locale}/navigation.json`),
      import(`@/src/locales/${locale}/footer.json`),
      import(`@/src/locales/${locale}/about.json`),
      import(`@/src/locales/${locale}/solutions.json`)
    ]);

    return {
      ...home.default,
      navigation: navigation.default.navigation,
      footer: footer.default.footer,
      about: about.default,
      solutions: solutions.default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to English
    const [home, navigation, footer, about, solutions] = await Promise.all([
      import(`@/src/locales/en/home.json`),
      import(`@/src/locales/en/navigation.json`),
      import(`@/src/locales/en/footer.json`),
      import(`@/src/locales/en/about.json`),
      import(`@/src/locales/en/solutions.json`)
    ]);

    return {
      ...home.default,
      navigation: navigation.default.navigation,
      footer: footer.default.footer,
      about: about.default,
      solutions: solutions.default
    };
  }
}
