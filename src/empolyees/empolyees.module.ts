import { Module } from '@nestjs/common';
import { EmpolyeesService } from './empolyees.service';
import { EmpolyeesController } from './empolyees.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmpolyeesController],
  providers: [EmpolyeesService],
})
export class EmpolyeesModule {}
