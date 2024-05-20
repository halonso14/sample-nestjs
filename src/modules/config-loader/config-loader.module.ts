import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiConfig from './configs/api.config';

@Module({})
export default class ConfigLoaderModule {
  static init() {
    return ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [apiConfig],
    });
  }
}
