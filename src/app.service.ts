import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiConfigType } from './modules/config-loader/configs/types';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getVersion(): string {
    const apiConfig: any = this.configService.get<ApiConfigType>('API_CONFIG')!;
    return apiConfig.version;
  }
}
