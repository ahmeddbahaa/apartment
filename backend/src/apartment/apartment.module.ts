// src/apartment/apartment.module.ts
import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartment.controller';
import { ApartmentsService } from './apartment.service';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class ApartmentModule {}
