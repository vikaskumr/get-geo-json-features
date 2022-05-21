import { Test, TestingModule } from '@nestjs/testing';
import { OpenStreetApiService } from '../service/open-street-api.service';

describe.skip('OpenStreetService', () => {
  let service: OpenStreetApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenStreetApiService],
    }).compile();

    service = module.get<OpenStreetApiService>(OpenStreetApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
