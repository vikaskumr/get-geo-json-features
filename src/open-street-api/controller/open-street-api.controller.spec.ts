import { Test, TestingModule } from '@nestjs/testing';
import { OpenStreetController } from './open-street.controller';

describe('OpenStreetController', () => {
  let controller: OpenStreetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenStreetController],
    }).compile();

    controller = module.get<OpenStreetController>(OpenStreetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
