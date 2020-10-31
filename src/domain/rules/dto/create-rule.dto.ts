import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional, IsInstance, IsArray } from 'class-validator';
import { RuleVariable } from '../entities/rule-variable';

export class CreateRuleDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  rule_variables: RuleVariable[];
}