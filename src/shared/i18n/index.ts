import { en, type Dictionary } from './dictionaries/en';
import { es } from './dictionaries/es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = { en: 'EN', es: 'ES' };

/**
 * BCP 47 tags for <html lang>, hreflang and Open Graph. URLs stay short (`/es/`),
 * but browsers and search engines are told the Spanish version is Spain's Spanish.
 */
export const localeTags: Record<Locale, { lang: string; og: string }> = {
  en: { lang: 'en', og: 'en_GB' },
  es: { lang: 'es-ES', og: 'es_ES' },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function toLocale(value: string | undefined): Locale {
  return locales.find((locale) => locale === value) ?? defaultLocale;
}

/** Usage in a component: `const t = getTranslations(Astro.currentLocale);` */
export function getTranslations(currentLocale: string | undefined): Dictionary {
  return dictionaries[toLocale(currentLocale)];
}

export type { Dictionary };
