import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetGeoJSONParamsDto } from '../dto/request/get-geo-json.dto';
import { OpenStreetApiService } from '../service/open-street-api.service';

@Controller('open-street')
@ApiTags('GeoJSON features')
export class OpenStreetController {
  constructor(private readonly openStreetApiService: OpenStreetApiService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'fetches GeoJSON features from openstreetmap api',
  })
  @Get()
  public async getGeoJSONFeatures(
    @Query() { bbox }: GetGeoJSONParamsDto,
  ): Promise<any> {
    return await this.openStreetApiService.getGeoJSONFeatures(bbox);
  }
}
