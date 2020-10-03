import { Controller, Post, Body, Get } from '@nestjs/common';
import { DeviceDataService } from './device-data.service';
import { DeviceDataCreateDto } from './device-data.dto';
import { DeviceData } from './device-data.entity';

@Controller('device-data')
export class DeviceDataController {

  constructor(private service: DeviceDataService) { }


  @Get()
  findAll(): Promise<DeviceData[]> {
    return this.service.findAll();
  }
  
  @Post()
  async create(@Body() create_dto: DeviceDataCreateDto): Promise<DeviceData> {
    return this.service.create(create_dto);
  }
}
