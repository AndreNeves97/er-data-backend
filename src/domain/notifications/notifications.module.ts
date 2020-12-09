import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { VariablesModule } from '../variables/variables.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]),
    VariablesModule
  ],
  exports: [NotificationsService],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
