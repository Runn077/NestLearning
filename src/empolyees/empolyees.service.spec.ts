import { Test, TestingModule } from '@nestjs/testing';
import { EmpolyeesService } from './empolyees.service';

describe('EmpolyeesService', () => {
  let service: EmpolyeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpolyeesService],
    }).compile();

    service = module.get<EmpolyeesService>(EmpolyeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
