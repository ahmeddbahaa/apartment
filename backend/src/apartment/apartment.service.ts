// src/apartment/apartments.service.ts
import { Injectable } from '@nestjs/common';
import { Apartment } from './apartment.entity';
import { apartments } from './apartment.mock';

@Injectable()
export class ApartmentsService {
  private readonly apartments: Apartment[] = apartments;

  getAllApartments(): Apartment[] {
    return this.apartments;
  }

  getApartmentById(id: number): Apartment {
    return this.apartments.find(apartment => apartment.id === id);
  }

  addApartment(apartment: Apartment): Apartment {
    const newApartment = { ...apartment, id: this.apartments.length + 1 };
    this.apartments.push(newApartment);
    return newApartment;
  }
}
