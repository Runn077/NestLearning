import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service'; 

@Injectable()
export class EmpolyeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmpolyeeDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createEmpolyeeDto,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) return this.databaseService.user.findMany({
      where: {
        role,
      }  
    });
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmpolyeeDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateEmpolyeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
