import { Test, TestingModule } from '@nestjs/testing';
import { OpenStreetApiService } from '../service/open-street-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('OpenStreetService', () => {
  let service: OpenStreetApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      providers: [OpenStreetApiService],
    }).compile();

    service = module.get<OpenStreetApiService>(OpenStreetApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
