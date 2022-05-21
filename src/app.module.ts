import { Module, ValidationPipe } from '@nestjs/common';
import { OpenStreetModule } from './open-street-api/open-street-api.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './utils/filters/all-exceptions.filter';
import { OpenStreetController } from './open-street-api/controller/open-street-api.controller';
import { OpenStreetApiService } from './open-street-api/service/open-street-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OpenStreetModule,
  ],
  controllers: [OpenStreetController],
  providers: [
    OpenStreetApiService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
