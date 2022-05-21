import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, Observable, firstValueFrom } from 'rxjs';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';

@Injectable()
export class OpenStreetApiService {
  public logger;
  constructor(protected readonly httpService: HttpService) {
    this.logger = new Logger(OpenStreetApiService.name);
  }

  public async getGeoJSONFeatures(boundingBox): Promise<any> {
    try {
      this.logger.log(
        'started fetching GeoJSONFeatures from openstreetmap api',
      );

      const url = 'https://www.openstreetmap.org/api/0.6/map';
      const { data } = await lastValueFrom(
        this.httpService.get(url, {
          params: {
            bbox: boundingBox,
          },
        }),
      );

      this.logger.log(
        'successfully fetched GeoJSONFeatures from openstreetmap api',
        data,
      );
      return data;
    } catch (error) {
      this.logger.error(
        'failed while fetching GeoJSONFeatures from openstreetmap api',
        error,
      );
      throw error;
    }
  }
}
