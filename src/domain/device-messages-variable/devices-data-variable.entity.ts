

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Device } from '../devices/device.entity';
import { DeviceMessage } from '../device-messages/device-data.entity';
import { Variable } from '../variables/variables.entity';


@Entity()
export class DeviceMessageVariable {
  @PrimaryGeneratedColumn()
  id: number;
  
  variable: Variable;

  @Column()
  value: number;
}