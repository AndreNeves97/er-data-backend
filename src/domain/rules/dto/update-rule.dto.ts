import { IsString, IsOptional, IsArray } from 'class-validator';
import { RuleVariable } from '../entities/rule-variable.entity';

export class UpdateRuleDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsArray()
  rule_variables: RuleVariable[];
}