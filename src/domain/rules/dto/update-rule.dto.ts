import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateRuleDto {
  @IsString()
  @IsOptional()
  name: string;
}