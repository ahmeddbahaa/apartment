import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
@Module({
  imports: [ApartmentModule],
})
export class AppModule {}
