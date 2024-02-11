// src/apartment/apartment.mocks.ts
import { Apartment } from './apartment.entity';
import { faker } from '@faker-js/faker';

export const apartments: Apartment[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.location.buildingNumber(),
  address: faker.location.streetAddress(),
  description: faker.lorem.paragraph(),
  imageUrl: faker.image.urlLoremFlickr({ width: 640, height: 480, category: 'apartment'}),
}));
