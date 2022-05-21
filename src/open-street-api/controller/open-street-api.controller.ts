import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetGeoJSONParamsDto } from '../dto/request/get-geo-json.dto';
import { GetGeoJSONResponseDto } from '../dto/response/get-geo-json.dto';
import { OpenStreetApiService } from '../service/open-street-api.service';
import { FeatureCollection, GeometryObject } from 'geojson';

@Controller('open-street')
@ApiTags('GeoJSON features')
export class OpenStreetController {
  constructor(private readonly openStreetApiService: OpenStreetApiService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'fetched GeoJSON features successfully from openstreetmap api',
    type: () => GetGeoJSONResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description:
      'Validation failed or some requirements were not fully satisfied',
  })
  @Get()
  public async getGeoJSONFeatures(
    @Query() { bbox }: GetGeoJSONParamsDto,
  ): Promise<FeatureCollection<GeometryObject>> {
    return await this.openStreetApiService.getGeoJSONFeatures(bbox);
  }
}
