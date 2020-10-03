import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDataController } from './device-data.controller';

describe('DeviceDataController', () => {
  let controller: DeviceDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceDataController],
    }).compile();

    controller = module.get<DeviceDataController>(DeviceDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
