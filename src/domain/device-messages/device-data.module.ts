import { Module } from '@nestjs/common';
import { DeviceDataController } from './device-data.controller';
import { DeviceDataService } from './device-data.service';
import { DeviceData } from './device-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceData])],
  controllers: [DeviceDataController],
  providers: [DeviceDataService]
})
export class DeviceDataModule {}
