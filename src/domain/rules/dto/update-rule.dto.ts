import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional, IsArray } from 'class-validator';
import { RuleVariable } from '../entities/rule-variable';

export class UpdateRuleDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsArray()
  rule_variables: RuleVariable[];
}