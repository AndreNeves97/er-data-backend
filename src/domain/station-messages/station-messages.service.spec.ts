import { Test, TestingModule } from '@nestjs/testing';
import { StationMessagesService } from './station-messages.service';

describe('StationMessagesService', () => {
  let service: StationMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationMessagesService],
    }).compile();

    service = module.get<StationMessagesService>(StationMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
