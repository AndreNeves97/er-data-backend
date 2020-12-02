import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from "./entities/notification.entity";
import { StationMessageVariableData } from '../station-messages/entities/station-message-variable-data.entity';
import { Station } from 'src/domain/stations/entities/station.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private repository: Repository<Notification>,
  ) {}
  
  async findAll() {
    return this.repository.find();
  }

  async sendVariableOutOfLimitsNotification(station: Station, variableData: StationMessageVariableData) {
    const message = 
      `A variável ${variableData.variable.id} da estação` + 
      ` ${station.name} extrapolou o valor limite ` + 
      `(Valor recebido: ${variableData.value})`
    
    const notification = new Notification({
      station,
      date: new Date(),
      message
    });
    
    return this.repository.save(notification);
  }
}
