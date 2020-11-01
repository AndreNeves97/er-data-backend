import { Module } from '@nestjs/common';
import { StationMessagesService } from './station-messages.service';
import { StationMessagesController } from './station-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationMessage } from './entities/station-message.entity';
import { StationMessageVariableData } from './entities/station-message-variable-data.entity';
import { StationsModule } from '../stations/stations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StationMessage, StationMessageVariableData]),
    StationsModule
  ],
  controllers: [StationMessagesController],
  providers: [StationMessagesService]
})
export class StationMessagesModule {}
