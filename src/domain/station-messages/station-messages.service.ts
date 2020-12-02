import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationsService } from '../notifications/notifications.service';
import { StationsService } from '../stations/stations.service';
import { CreateStationMessageDto } from './dto/create-station-message.dto';
import { StationMessageVariableData } from './entities/station-message-variable-data.entity';
import { StationMessage } from './entities/station-message.entity';

@Injectable()
export class StationMessagesService {
  constructor(
    @InjectRepository(StationMessage)
    private repository: Repository<StationMessage>,

    @InjectRepository(StationMessageVariableData)
    private messageVariableDataRepository: Repository<StationMessageVariableData>,

    private stationsService: StationsService,
    private notificationsService: NotificationsService
  ) {}


  async create(createStationMessageDto: CreateStationMessageDto) {
    await this.validateVariablesInInsertion(createStationMessageDto);

    const obj = await this.repository.save(createStationMessageDto);
    await this.insertMessageVariables(obj.id, createStationMessageDto.variables_data);

    await this.sendNotifications(createStationMessageDto);

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

  async sendNotifications(createStationMessageDto: CreateStationMessageDto) {
    const station = await this
      .stationsService
      .findOne(createStationMessageDto.station.id);

    const promises = createStationMessageDto
      .variables_data
      .filter(data => data.inside_the_limits === false)
      .map(variableData => this.notificationsService.sendVariableOutOfLimitsNotification(station, variableData));

    return Promise.all(promises);
  }

  async validateVariablesInInsertion(createStationMessageDto: CreateStationMessageDto) {
    const station = await this.stationsService.findOneWithRule(createStationMessageDto.station.id);
    const rule = station.rule;

    const variables_out_rule = rule.analyzeVariablesValuesOutOfRule(createStationMessageDto.variables_data);
    
    createStationMessageDto
      .variables_data 
      .forEach(variable_data => {
        const index = variables_out_rule.findIndex(rule => rule.isRuleOfVariable(variable_data.variable))
        
        variable_data.inside_the_limits = false;
        
        if(index < 0) {
          variable_data.inside_the_limits = true;
        }
      });
  }
}
