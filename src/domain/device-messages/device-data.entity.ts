
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Device } from '../devices/device.entity';
import { DeviceMessageVariable } from '../device-messages-variable/devices-data-variable.entity';


@Entity()
export class DeviceMessage {
  @PrimaryGeneratedColumn()
  id: number;

  device: Device;

  date: Date;

  @Column()
  coor_lat: string;

  @Column()
  coor_long: string;


  variables: DeviceMessageVariable[]
}