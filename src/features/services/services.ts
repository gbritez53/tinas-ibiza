import type { ImageMetadata } from 'astro';
import apartmentLiving from '../../assets/services/apartment-living.jpg';
import apartmentBathroom from '../../assets/services/apartment-bathroom.jpg';
import poolClear from '../../assets/services/pool-clear.jpg';
import painting from '../../assets/services/painting.jpg';
import handyman from '../../assets/services/handyman.jpg';
import garden from '../../assets/services/garden.jpg';

export type ServiceId = 'house-management' | 'cleaning' | 'pool' | 'painting' | 'handyman' | 'garden';

export interface Service {
  id: ServiceId;
  image?: ImageMetadata;
}

// Source: "Services" Instagram highlight. Titles live in the i18n dictionaries.
// Services without a real photo yet render as solid tiles.
export const services: Service[] = [
  { id: 'house-management', image: apartmentLiving },
  { id: 'cleaning', image: apartmentBathroom },
  { id: 'pool', image: poolClear },
  { id: 'painting', image: painting },
  { id: 'handyman', image: handyman },
  { id: 'garden', image: garden },
];
