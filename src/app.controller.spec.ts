import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigLoaderModule from './modules/config-loader/config-loader.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigLoaderModule.init()],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Test GET /version API', () => {
    it('should return 1', () => {
      expect(appController.getVersion()).toBe(1);
    });
  });
});
