import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateRuleDto {
  @IsString()
  name: string;
}