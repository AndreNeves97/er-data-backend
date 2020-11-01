import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { RuleVariable } from '../entities/rule-variable.entity';

export class CreateRuleDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  rule_variables: RuleVariable[];
}