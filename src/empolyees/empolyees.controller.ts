import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpolyeesService } from './empolyees.service';
import { Prisma } from '../../generated/prisma/client';

@Controller('empolyees')
export class EmpolyeesController {
  constructor(private readonly empolyeesService: EmpolyeesService) {}

  @Post()
  create(@Body() createEmpolyeeDto: Prisma.UserCreateInput) {
    return this.empolyeesService.create(createEmpolyeeDto);
  }

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.empolyeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empolyeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpolyeeDto: Prisma.UserUpdateInput) {
    return this.empolyeesService.update(+id, updateEmpolyeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empolyeesService.remove(+id);
  }
}
