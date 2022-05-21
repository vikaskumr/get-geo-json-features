import { IsEnum, IsString } from 'class-validator';

export enum NODE_ENV {
  Production = 'production',
  Development = 'development',
  Test = 'test',
}

export class EnvironmentVariables {
  @IsString()
  @IsEnum(NODE_ENV)
  NODE_ENV: NODE_ENV;

  @IsString()
  OPEN_STREET_API_URL = 'https://www.openstreetmap.org/api/0.6/map';
}
