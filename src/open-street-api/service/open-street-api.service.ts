import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import osmtogeojson from 'osmtogeojson';
import { ConfigService } from '@nestjs/config';
import { FeatureCollection, GeometryObject } from 'geojson';

@Injectable()
export class OpenStreetApiService {
  public logger;
  constructor(
    protected readonly httpService: HttpService,
    protected readonly configService: ConfigService,
  ) {
    this.logger = new Logger(OpenStreetApiService.name);
  }

  public async getGeoJSONFeatures(
    boundingBox: string,
  ): Promise<FeatureCollection<GeometryObject>> {
    try {
      this.logger.log(
        'started fetching GeoJSONFeatures from openstreetmap api',
      );

      const url: string = this.configService.get<string>('OPEN_STREET_API_URL');
      const { data } = await lastValueFrom(
        this.httpService.get(url, {
          params: {
            bbox: boundingBox,
          },
        }),
      );

      this.logger.log(
        'successfully fetched GeoJSONFeatures from openstreetmap api',
      );

      return osmtogeojson(data);
    } catch (error) {
      this.logger.error(
        'failed while fetching GeoJSONFeatures from openstreetmap api',
        error,
      );
      throw error;
    }
  }
}
