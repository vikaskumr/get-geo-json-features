import { Module, ValidationPipe } from '@nestjs/common';
import { OpenStreetModule } from './open-street-api/open-street-api.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './utils/filters/all-exceptions.filter';
import { OpenStreetController } from './open-street-api/controller/open-street-api.controller';
import { OpenStreetApiService } from './open-street-api/service/open-street-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { configValidate } from './utils/config.validate';
@Module({})
export class AppModule {
  static register({ shouldValidate = true }: { shouldValidate: boolean }) {
    const imports = [
      HttpModule,
      ConfigModule.forRoot({
        isGlobal: true,
        validate: shouldValidate && configValidate,
      }),
      OpenStreetModule,
    ];
    const controllers = [OpenStreetController];
    const providers = [
      OpenStreetApiService,
      {
        provide: APP_FILTER,
        useClass: AllExceptionsFilter,
      },
      {
        provide: APP_PIPE,
        useClass: ValidationPipe,
      },
    ];
    return {
      module: AppModule,
      imports,
      providers,
      controllers,
    };
  }
}
