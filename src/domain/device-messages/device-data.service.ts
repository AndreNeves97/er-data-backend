import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceData } from './device-data.entity';
import { Repository } from 'typeorm';
import { DeviceDataCreateDto } from './device-data.dto';

@Injectable()
export class  DeviceDataService {
  constructor(
    @InjectRepository(DeviceData)
    private repository: Repository<DeviceData>,
  ) {}

  findAll(): Promise<DeviceData[]> {
    return this.repository.find();
  }

  async create(device_data_create: DeviceDataCreateDto): Promise<DeviceData> {
    const device_data = new DeviceData();

    const {
      id_device,
      id_message,
      id_parameter,
      value
    } = device_data_create;

    
    Object.assign(device_data, {
      id_device,
      id_message,
      id_parameter,
      value
    });


    const rule;

    rule.

    return await this.repository.save(device_data);
  }
}

