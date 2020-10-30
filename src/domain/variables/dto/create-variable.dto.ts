import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateVariableDto {
  @IsString()
  name: string

  @IsString()
  unity: string

  @IsNumber()
  min_value: number

  @IsNumber()
  max_value: number
}