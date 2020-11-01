import { IsString, IsNumber, IsOptional, IsInstance, IsArray, IsObject } from 'class-validator';
import { Rule } from 'src/domain/rules/entities/rule.entity';
import { User } from 'src/domain/users/entities/user.entity';
import { Variable } from 'src/domain/variables/entities/variable.entity';

export class UpdateStationDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  coord_lat: string;

  @IsString()
  @IsOptional()
  coord_long: string;

  @IsObject()
  @IsOptional()
  rule: Rule

  @IsArray()
  @IsOptional()
  variables: Variable[];
}