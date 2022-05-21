import { IsBboxValid } from '../../../utils/validators/decorators/isBboxValid';
import { ApiProperty } from '@nestjs/swagger';
//import { IsNumber } from 'class-validator';

export class GetGeoJSONParamsDto {
  @IsBboxValid({
    message:
      '$value The parameter bbox is required, and must be of the form min_lon,min_lat,max_lon,max_lat.',
  })
  @ApiProperty({
    description: 'bounding box location to be entered',
    example: `-90,89,90,90`,
    type: String,
  })
  bbox: string;
}
