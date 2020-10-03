import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDataService } from './device-data.service';

describe('DeviceDataService', () => {
  let service: DeviceDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceDataService],
    }).compile();

    service = module.get<DeviceDataService>(DeviceDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
