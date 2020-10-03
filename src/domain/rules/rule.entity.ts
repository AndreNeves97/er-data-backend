
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Variable } from '../variables/variables.entity';
import { User } from '../users/users.entity';
import { RuleVariable } from '../rules-variable/rule-variable';


@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  variables: RuleVariable[];
}