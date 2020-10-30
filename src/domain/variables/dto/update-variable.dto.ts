import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateVariableDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  unity: string

  @IsNumber()
  @IsOptional()
  min_value: number

  @IsNumber()
  @IsOptional()
  max_value: number
}