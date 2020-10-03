
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Variable } from '../variables/variables.entity';
import { User } from '../users/users.entity';
import { Rule } from '../rules/rule.entity';


@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  coor_lat: string;

  @Column()
  coor_long: string;

  variables: Variable[];

  rule: Rule

  owner: User;
}