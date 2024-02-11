import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Apartment } from './apartment.entity';
import { ApartmentsService } from './apartment.service';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  getAllApartments(): Apartment[] {
    return this.apartmentsService.getAllApartments();
  }

  @Get(':id')
  getApartmentById(@Param('id') id: string): Apartment {
    return this.apartmentsService.getApartmentById(+id);
  }

  @Post()
  addApartment(@Body() apartment: Apartment): Apartment {
    return this.apartmentsService.addApartment(apartment);
  }
}
