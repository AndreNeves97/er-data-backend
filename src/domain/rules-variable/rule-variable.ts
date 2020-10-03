
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Variable } from '../variables/variables.entity';
import { User } from '../users/users.entity';


@Entity()
export class RuleVariable {
  @PrimaryGeneratedColumn()
  id: number;

  variable: Variable
  
  min_value: number
  max_value: number
}