import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StationMessagesService } from './station-messages.service';
import { CreateStationMessageDto } from './dto/create-station-message.dto';

@Controller('station-messages')
export class StationMessagesController {
  constructor(private readonly stationMessagesService: StationMessagesService) {}
  
  @Post()
  async create(@Body() createStationMessageDto: CreateStationMessageDto) {
    const obj = await this.stationMessagesService.create(createStationMessageDto);
    return this.stationMessagesService.findOne(obj.id);
  }

  @Get()
  findAll() {
    return this.stationMessagesService.findAll();
  }
}
