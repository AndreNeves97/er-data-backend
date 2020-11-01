import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional, IsInstance, IsArray, IsObject } from 'class-validator';
import { Rule } from 'src/domain/rules/entities/rule.entity';
import { User } from 'src/domain/users/entities/user.entity';
import { Variable } from 'src/domain/variables/entities/variable.entity';

export class CreateStationDto {
  @IsString()
  name: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  coord_lat: string;

  @IsString()
  coord_long: string;

  @IsObject()
  rule: Rule

  @IsArray()
  variables: Variable[];
}