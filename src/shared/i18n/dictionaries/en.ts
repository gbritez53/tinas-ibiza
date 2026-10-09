import type { ServiceId } from '../../../features/services/services';

export const en = {
  meta: {
    title: 'TINAS Integral Maintenance · Ibiza',
    description:
      'Integral maintenance and property care for luxury villas and apartments in Ibiza: cleaning, pools, gardens, painting, repairs and house management.',
  },
  nav: {
    label: 'Main',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
  },
  hero: {
    tagline: 'Integral maintenance',
    lead: 'We take care of exceptional homes as if they were our own.',
  },
  manifesto: {
    titleStart: 'One team. One',
    titleAccent: 'responsibility.',
    body: 'From winter preparation to attentive daily care throughout the summer, every detail is handled with discretion, continuity and the highest standards. Daily supervision and direct communication with you — so your Ibiza home is protected, overseen and preserved.',
  },
  care: {
    eyebrow: 'Present or miles away',
    titleStart: 'Protected. Overseen.',
    titleAccent: 'Preserved.',
    body: 'Your property is more than maintained. A dedicated team, daily supervision and direct communication with you — adapting to your standards with discretion, reliability and attention to detail, all year round.',
    seasons: [
      { name: 'Winter', detail: 'Preparation & repairs' },
      { name: 'Summer', detail: 'Attentive daily care' },
      { name: 'Turnover', detail: 'Deep clean between guests' },
    ],
    imageAlt: 'Aerial view of a TINAS team member cleaning a pool',
  },
  services: {
    title: 'Our services',
    intro: 'One team, one responsibility. Fully tailored to each owner.',
    items: {
      'house-management': 'House\nmanagement',
      cleaning: 'Interior &\nexterior cleaning',
      pool: 'Swimming pool\nmaintenance',
      painting: 'Painting &\ndecoration',
      handyman: 'Handyman',
      garden: 'Garden\nmaintenance',
    } satisfies Record<ServiceId, string>,
  },
  work: {
    titleBefore: 'Before',
    titleAfter: 'After',
    body: 'From green to crystal clear. Pool season starts with us — drag the line to see the change.',
    slider: {
      label: 'Compare the pool before and after treatment',
      before: 'Before',
      after: 'After',
      valueText: '{before}% before, {after}% after',
      beforeAlt: 'Villa pool before treatment, green water full of leaves',
      afterAlt: 'The same villa pool after treatment, crystal clear water',
    },
  },
  instagram: {
    title: 'There are things you shouldn’t worry about.',
    follow: 'Follow on Instagram',
  },
  about: {
    titleStart: 'Behind every well-kept house,',
    titleAccent: 'there are people who take care of it.',
    body: 'TINAS was born in Ibiza in 2026 with a clear vision: bring comprehensive maintenance to more property owners while staying true to our values — closeness, trust and the experience of caring for every unique home.',
    foundersAlt: 'Luis and Rocío, founders of TINAS',
    foundersCaption: 'Luis & Rocío',
  },
  cta: {
    titleStart: 'Your Ibiza home deserves',
    titleAccent: 'trusted hands.',
    body: 'Request a tailored quote for your property. Tell us about your home and the services you need, and we will get back to you personally.',
    quoteMessage: 'Hello TINAS, I would like to request a quote for my property in Ibiza.',
    quoteSubject: 'Quote request — property in Ibiza',
    whatsapp: 'Request a quote on WhatsApp',
  },
  footer: {
    titleStart: 'Your Ibiza villa deserves',
    titleAccent: 'trusted hands.',
    location: 'Ibiza, Balearic Islands',
    languages: 'Spanish / English',
    whatsapp: 'Message us on WhatsApp',
    tagline: 'Discreet. Reliable. Effortless living, all year round.',
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

/** Every locale must provide exactly this shape — a missing key fails type-checking. */
export type Dictionary = Widen<typeof en>;
