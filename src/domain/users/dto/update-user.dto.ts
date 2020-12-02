import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  first_name: string;

  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsDate()
  @IsOptional() 
  birth_date: Date;
}