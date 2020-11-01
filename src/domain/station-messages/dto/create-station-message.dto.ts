import { IsNumber, IsNotEmpty, IsString, IsDate, IsOptional, IsInstance, IsArray, IsObject } from 'class-validator';
import { Station } from 'src/domain/stations/entities/station.entity';
import { StationMessageVariableData } from '../entities/station-message-variable-data.entity';

export class CreateStationMessageDto {
  @IsString()
  date: Date;

  @IsString()
  coord_lat: string;

  @IsString()
  coord_long: string;

  @IsObject()
  station: Station

  @IsArray()
  variables_data: StationMessageVariableData[];  
}