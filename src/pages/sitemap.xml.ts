import type { APIRoute } from 'astro';
import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { localeTags, locales } from '../shared/i18n';

// Each URL lists every language version so Google pairs / and /es/ as translations.
export const GET: APIRoute = () => {
  const alternates = locales
    .map(
      (locale) =>
        `<xhtml:link rel="alternate" hreflang="${localeTags[locale].lang}" href="${getAbsoluteLocaleUrl(locale)}"/>`,
    )
    .join('');

  const urls = locales
    .map((locale) => `<url><loc>${getAbsoluteLocaleUrl(locale)}</loc>${alternates}</url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
