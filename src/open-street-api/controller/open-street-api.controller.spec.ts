import { Test, TestingModule } from '@nestjs/testing';
import { OpenStreetController } from './open-street-api.controller';
import { OpenStreetApiService } from '../service/open-street-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

const httpService = {
  get: jest.fn(),
};

const configService = {
  get: jest.fn(),
};

const geoJSONResponse = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: 'node/269538499',
      properties: {
        timestamp: '2022-01-08T14:29:59Z',
        version: 42,
        changeset: 115911952,
        user: 'Aranc',
        uid: 9475258,
        'alt_name:en_1': 'Geographic North Pole',
        'alt_name:en_2': 'Terrestrial North Pole',
        'alt_name:en_3': 'True North Pole',
        'alt_name:tr': 'Kuzey Kutup Noktası',
        'alt_name:vi': 'Cực Bắc',
        name: 'North Pole',
        'name:af': 'Noordpool',
        'name:ast': 'Polu Norte',
        'name:ba': 'Төньяҡ ҡотоп',
        'name:cs': 'Severní pól',
        'name:da': 'Nordpolen',
        'name:de': 'Nordpol',
        'name:en': 'North Pole',
        'name:eo': 'Norda poluso',
        'name:es': 'polo norte',
        'name:et': 'Põhjapoolus',
        'name:fi': 'Pohjoisnapa',
        'name:fr': 'Pôle Nord',
        'name:he': 'הקוטב הצפוני',
        'name:hr': 'Sjeverni pol',
        'name:ia': 'Polo Nord',
        'name:io': 'Norda Polo',
        'name:it': 'Polo artico',
        'name:lfn': 'Polo Norde',
        'name:lt': 'Šiaurės ašigalis',
        'name:nl': 'Noordpool',
        'name:pl': 'Biegun północny',
        'name:pt': 'Polo Norte',
        'name:ru': 'Се́верный по́люс',
        'name:sk': 'Severný pól',
        'name:sl': 'Severni tečaj',
        'name:sv': 'Nordpolen',
        'name:tr': 'Kuzey Kutbu',
        'name:tt': 'Төньяк котып',
        'name:uk': 'Північний полюс',
        'name:vi': 'Bắc Cực',
        'name:vo': 'Pov Nolüdik',
        'name:zh': '北极点',
        'name:zh-Hans': '北极点',
        'name:zh-Hant': '北極點',
        place: 'locality',
        population: '0',
        wikidata: 'Q934',
        wikipedia: 'en:North Pole',
        'wikipedia:tr': 'Kuzey Kutbu',
        id: 'node/269538499',
      },
      geometry: {
        type: 'Point',
        coordinates: [0, 90],
      },
    },
  ],
};

const errorResponse = {
  err: {
    reason:
      'The latitudes must be between -90 and 90, longitudes between -180 and 180 and the minima must be less than the maxima.',
    statusCode: 400,
    code: 'ERR_BAD_REQUEST',
  },
  statusCode: 400,
  timestamp: '2022-05-22T04:09:21.184Z',
};
describe('OpenStreetController', () => {
  let controller: OpenStreetController;
  let openStreetApiService: OpenStreetApiService;

  beforeEach(async () => {
    jest.clearAllMocks();

    openStreetApiService = new OpenStreetApiService(
      httpService as unknown as HttpService,
      configService as unknown as ConfigService,
    );

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      controllers: [OpenStreetController],
      providers: [
        {
          provide: OpenStreetApiService,
          useValue: openStreetApiService,
        },
      ],
    }).compile();

    controller = module.get<OpenStreetController>(OpenStreetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return expected response', async () => {
    openStreetApiService.getGeoJSONFeatures = jest
      .fn()
      .mockImplementation(() => geoJSONResponse);
    const bbox = { bbox: '-90,90,90,90' };
    expect(await controller.getGeoJSONFeatures(bbox)).toStrictEqual(
      geoJSONResponse,
    );
  });

  it('should return error', async () => {
    openStreetApiService.getGeoJSONFeatures = jest
      .fn()
      .mockImplementation(() => errorResponse);
    const bbox = { bbox: '-0,90,60,9' };
    expect(await controller.getGeoJSONFeatures(bbox)).toStrictEqual(
      errorResponse,
    );
  });
});
