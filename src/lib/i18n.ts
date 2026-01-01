import { translations } from './translations';
import type { Translation } from './translations';

export type Locale = 'en' | 'ru';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'ru'];

export function getTranslations(locale: Locale): Translation {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');
  if (maybeLocale && locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const isRoot = path === '/';
  const trimmed = path.endsWith('/') && !isRoot ? path.slice(0, -1) : path;

  if (locale === defaultLocale) {
    return isRoot ? '/' : `${trimmed}/`;
  }

  if (isRoot) {
    return '/ru/';
  }

  return `/${locale}${trimmed}/`;
}

