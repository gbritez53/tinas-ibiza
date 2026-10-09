import type { ImageMetadata } from 'astro';
import type { Locale } from '../../shared/i18n';
import oneTeam from '../../assets/instagram/DUjC4JuiHDi.jpg';
import thingsYouShouldntWorry from '../../assets/instagram/DUtDy7ACO82_1.jpg';
import withDiscretion from '../../assets/instagram/DUoZzBwjuMZ.jpg';
import homesAsOurOwn from '../../assets/instagram/DUV1LK2iIjG.jpg';
import aboutUs from '../../assets/instagram/DUYiu2hiIoP.jpg';
import simplicity from '../../assets/instagram/DWojVYBiFfL.jpg';
import propertyManagement from '../../assets/instagram/DU1BF7fiAUy.jpg';
import poolCare from '../../assets/instagram/DbK-RQ-O0RG.jpg';
import carpentryBySea from '../../assets/instagram/DX15JHtiEvg_2.jpg';
import poolClear from '../../assets/instagram/DWUIzLPiGEf_2.jpg';
import sanding from '../../assets/instagram/DX15JHtiEvg_1.jpg';
import bedroom from '../../assets/instagram/DV1UvnwCKdL_2.jpg';
import bathroom from '../../assets/instagram/DV1UvnwCKdL_1.jpg';
import living from '../../assets/instagram/DV1UvnwCKdL_5.jpg';

export interface InstagramPost {
  shortcode: string;
  image: ImageMetadata;
  alt: Record<Locale, string>;
}

const post = (shortcode: string, image: ImageMetadata, en: string, es: string): InstagramPost => ({
  shortcode,
  image,
  alt: { en, es },
});

/** Brand pieces: editorial headlines. */
export const brandPosts: InstagramPost[] = [
  post('DUjC4JuiHDi', oneTeam, 'One team. One responsibility.', 'Un solo equipo. Una sola responsabilidad.'),
  post('DUtDy7ACO82', thingsYouShouldntWorry, 'There are things you shouldn’t worry about', 'Hay cosas de las que no debería preocuparse'),
  post('DUoZzBwjuMZ', withDiscretion, 'Without improvising. With discretion.', 'Sin improvisar. Con discreción.'),
  post('DUV1LK2iIjG', homesAsOurOwn, 'We take care of homes as if they were our own', 'Cuidamos hogares como si fueran nuestros'),
  post('DUYiu2hiIoP', aboutUs, 'About TINAS', 'Sobre TINAS'),
  post('DWojVYBiFfL', simplicity, 'Simplicity meets elegance', 'Sencillez y elegancia'),
  post('DU1BF7fiAUy', propertyManagement, 'Property management in Ibiza', 'Gestión de propiedades en Ibiza'),
];

/** Real work: pools, carpentry, apartments after cleaning. */
export const workPosts: InstagramPost[] = [
  post('DbK-RQ-O0RG', poolCare, 'TINAS team member caring for a villa pool', 'Miembro del equipo de TINAS cuidando la piscina de una villa'),
  post('DX15JHtiEvg', carpentryBySea, 'Sanding outdoor furniture by the sea', 'Lijado de muebles de exterior frente al mar'),
  post('DWUIzLPiGEf', poolClear, 'Crystal clear pool ready for the season', 'Piscina cristalina lista para la temporada'),
  post('DX15JHtiEvg', sanding, 'Perfect finish on the woodwork', 'Acabado perfecto en la madera'),
  post('DV1UvnwCKdL', bedroom, 'Bedroom ready for the next guests', 'Dormitorio listo para los próximos huéspedes'),
  post('DV1UvnwCKdL', bathroom, 'Bathroom after a deep clean', 'Baño tras una limpieza a fondo'),
  post('DV1UvnwCKdL', living, 'Living room after a tenant change', 'Salón tras un cambio de inquilinos'),
];
