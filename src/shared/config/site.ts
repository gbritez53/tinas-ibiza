export const site = {
  name: 'TINAS Integral Maintenance',
  shortName: 'TINAS',
  location: 'Ibiza, Balearic Islands',
  postalCode: '07800',
  phones: [
    { label: '+34 641 985 073', href: 'tel:+34641985073' },
    { label: '+34 641 983 882', href: 'tel:+34641983882' },
  ],
  email: 'tinasintegralmaintenance@gmail.com',
  whatsapp: 'https://wa.me/34641985073',
  instagram: { handle: '@tinas.ibiza', url: 'https://www.instagram.com/tinas.ibiza/' },
  facebook: 'https://www.facebook.com/profile.php?id=61587198399054',
} as const;

/** Section anchors; labels come from the i18n dictionaries (`nav`). */
export const navigation = [
  { key: 'services', href: '#services' },
  { key: 'work', href: '#work' },
  { key: 'about', href: '#about' },
] as const;
