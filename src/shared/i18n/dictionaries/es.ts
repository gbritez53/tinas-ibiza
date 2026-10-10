import type { Dictionary } from './en';

// Copy adapted from the client's own Spanish Instagram captions (formal "usted").
export const es: Dictionary = {
  meta: {
    title: 'TINAS Integral Maintenance · Mantenimiento integral en Ibiza',
    description:
      'Mantenimiento integral y cuidado de villas y apartamentos de lujo en Ibiza: limpieza, piscinas, jardines, pintura, reparaciones y gestión de la propiedad.',
  },
  nav: {
    label: 'Principal',
    services: 'Servicios',
    work: 'Trabajos',
    about: 'Nosotros',
    contact: 'Contacto',
    language: 'Idioma',
  },
  hero: {
    tagline: 'Mantenimiento integral',
    lead: 'Cuidamos hogares excepcionales como si fueran nuestros.',
  },
  manifesto: {
    titleStart: 'Un solo equipo. Una sola',
    titleAccent: 'responsabilidad.',
    body: 'Desde la puesta a punto de su vivienda en invierno hasta el cuidado diario durante el verano, cuidamos cada detalle con discreción, continuidad y los más altos estándares. Supervisión diaria y comunicación directa con usted, para que su hogar en Ibiza esté protegido, supervisado y conservado.',
  },
  care: {
    eyebrow: 'Esté presente o a kilómetros',
    titleStart: 'Protegida. Supervisada.',
    titleAccent: 'Conservada.',
    body: 'Su propiedad no solo se mantiene. Un equipo dedicado, supervisión diaria y comunicación directa con usted, adaptándonos a sus estándares con discreción, confianza y atención al detalle durante todo el año.',
    seasons: [
      { name: 'Invierno', detail: 'Puesta a punto y reparaciones' },
      { name: 'Verano', detail: 'Cuidado diario y atento' },
      { name: 'Cambio de huéspedes', detail: 'Limpieza a fondo entre estancias' },
    ],
    imageAlt: 'Miembro del equipo de TINAS cortando el césped de una villa con los montes de Ibiza al fondo',
  },
  services: {
    title: 'Nuestros servicios',
    intro: 'Un solo equipo, una sola responsabilidad. Un servicio adaptado a cada propietario.',
    items: {
      'house-management': 'Gestión de\nla propiedad',
      cleaning: 'Limpieza interior\ny exterior',
      pool: 'Mantenimiento\nde piscinas',
      painting: 'Pintura y\ndecoración',
      handyman: 'Manitas',
      garden: 'Mantenimiento\nde jardines',
    },
  },
  work: {
    titleBefore: 'Antes',
    titleAfter: 'Después',
    body: 'De verde a cristalina. La temporada de piscinas empieza con nosotros: deslice la línea para ver el cambio.',
    slider: {
      label: 'Compare la piscina antes y después del tratamiento',
      before: 'Antes',
      after: 'Después',
      valueText: '{before}% antes, {after}% después',
      beforeAlt: 'Piscina de una villa antes del tratamiento, con agua verde y llena de hojas',
      afterAlt: 'La misma piscina después del tratamiento, con agua cristalina',
    },
  },
  instagram: {
    title: 'Hay cosas de las que no debería preocuparse.',
    follow: 'Síganos en Instagram',
  },
  about: {
    titleStart: 'Detrás de cada casa bien cuidada,',
    titleAccent: 'hay personas que la cuidan.',
    body: 'TINAS nació en Ibiza en 2026 con una visión clara: llevar nuestro mantenimiento integral a más propietarios, siempre fieles a nuestros valores: cercanía, confianza y la experiencia de cuidar cada hogar como algo único.',
    foundersAlt: 'Luis y Rocío, fundadores de TINAS',
    foundersCaption: 'Luis y Rocío',
  },
  cta: {
    titleStart: 'Su hogar en Ibiza merece',
    titleAccent: 'manos de confianza.',
    body: 'Solicite un presupuesto a medida para su propiedad. Cuéntenos cómo es su hogar y qué servicios necesita, y le responderemos personalmente.',
    quoteMessage: 'Hola TINAS, me gustaría solicitar un presupuesto para mi propiedad en Ibiza.',
    quoteSubject: 'Solicitud de presupuesto — propiedad en Ibiza',
    whatsapp: 'Pedir presupuesto por WhatsApp',
  },
  footer: {
    titleStart: 'Su villa en Ibiza merece',
    titleAccent: 'manos de confianza.',
    location: 'Ibiza, Islas Baleares',
    languages: 'Español / Inglés',
    whatsapp: 'Escríbanos por WhatsApp',
    tagline: 'Discreción. Confianza. Tranquilidad durante todo el año.',
  },
};
