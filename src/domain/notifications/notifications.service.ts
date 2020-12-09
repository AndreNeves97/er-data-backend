import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from "./entities/notification.entity";
import { StationMessageVariableData } from '../station-messages/entities/station-message-variable-data.entity';
import { Station } from 'src/domain/stations/entities/station.entity';
import { VariablesService } from '../variables/variables.service';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private repository: Repository<Notification>,

    private variablesService: VariablesService
  ) {}
  
  async findAll() {
    return this.repository
      .createQueryBuilder('notification')
      .select([
        'notification',
        'station',
      ])
      .leftJoin('notification.station', 'station')
      .orderBy('date', "ASC")
      .getMany();
  }

  async sendVariableOutOfLimitsNotification(station, variableData: StationMessageVariableData) {
    const variable = await this.variablesService.findOne(variableData.variable.id);


    const message = 
      `The variable ${variable.name} (Id: ${variable.id})` + 
      ` exceded the limit value.` + 
      ` (Received value: ${variableData.value}` + 
      `${variable.unity === 'N/A'? '' : variable.unity}` + 
      `)`
    
    const notification = new Notification({
      station,
      date: new Date(),
      message
    });
    
    return this.repository.save(notification);
  }
}
