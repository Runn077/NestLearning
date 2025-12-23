import { Test, TestingModule } from '@nestjs/testing';
import { EmpolyeesController } from './empolyees.controller';
import { EmpolyeesService } from './empolyees.service';

describe('EmpolyeesController', () => {
  let controller: EmpolyeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpolyeesController],
      providers: [EmpolyeesService],
    }).compile();

    controller = module.get<EmpolyeesController>(EmpolyeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
