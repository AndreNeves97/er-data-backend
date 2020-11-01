import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationMessageDto } from './dto/create-station-message.dto';
import { StationMessageVariableData } from './entities/station-message-variable-data.entity';
import { StationMessage } from './entities/station-message.entity';

@Injectable()
export class StationMessagesService {
  constructor(
    @InjectRepository(StationMessage)
    private repository: Repository<StationMessage>,

    @InjectRepository(StationMessageVariableData)
    private messageVariableDataRepository: Repository<StationMessageVariableData>
  ) {}


  async create(createStationMessageDto: CreateStationMessageDto) {
    const obj = await this.repository.save(createStationMessageDto);
    await this.insertMessageVariables(obj.id, createStationMessageDto.variables_data);

    /// process rule boudaries values

    return obj;
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id, {
      relations: ['station', 'variables_data']
    });
  }

  async insertMessageVariables(id, variables_data: StationMessageVariableData[]) {
    const promises = variables_data
      .map(variable_data => {
        variable_data.station_message = new StationMessage({id});
        return this.messageVariableDataRepository.save(variable_data);
      });
  
    return await Promise.all(promises);
  }
}
