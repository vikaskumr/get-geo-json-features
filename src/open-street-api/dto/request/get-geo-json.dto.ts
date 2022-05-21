import { IsBboxValid } from '../../../utils/validators/decorators/isBboxValid';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
//import { IsNumber } from 'class-validator';

export class GetGeoJSONParamsDto {
  @IsString()
  @IsBboxValid({
    message:
      '$value The parameter bbox is required, and must be of the form min_lon,min_lat,max_lon,max_lat.',
  })
  @ApiProperty({
    description: 'bounding box location to be entered',
    example: `-90,90,90,90`,
    required: true,
    type: String,
  })
  bbox: string;
}
