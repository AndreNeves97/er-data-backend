
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Variable {
  @PrimaryGeneratedColumn()
  id: number;
  
  name: string

  unity: string

  min_limit: number
  max_limit: number
}