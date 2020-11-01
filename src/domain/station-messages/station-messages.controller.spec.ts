import { Test, TestingModule } from '@nestjs/testing';
import { StationMessagesController } from './station-messages.controller';
import { StationMessagesService } from './station-messages.service';

describe('StationMessagesController', () => {
  let controller: StationMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationMessagesController],
      providers: [StationMessagesService],
    }).compile();

    controller = module.get<StationMessagesController>(StationMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
