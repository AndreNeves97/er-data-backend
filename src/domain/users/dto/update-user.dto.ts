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

  @IsDate()
  @IsOptional() 
  birth_date: Date;
}