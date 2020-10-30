import { IsEmail, IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  first_name: string;
  
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  firebase_uid: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsDate()
  @IsOptional()
  birth_date: Date;
}
