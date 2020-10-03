
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


export class DeviceDataCreateDto {
  @Column()
  id_device: string;

  @Column()
  id_message: string;

  @Column()
  id_parameter: string;

  @Column()
  value: number;
}