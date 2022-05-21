import { Module } from '@nestjs/common';
import { OpenStreetController } from './controller/open-street-api.controller';
import { OpenStreetApiService } from './service/open-street-api.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [OpenStreetController],
  providers: [OpenStreetApiService],
})
export class OpenStreetModule {}
