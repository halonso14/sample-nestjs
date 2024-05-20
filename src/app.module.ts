import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigLoaderModule from './modules/config-loader/config-loader.module';

@Module({
  imports: [ConfigLoaderModule.init()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
