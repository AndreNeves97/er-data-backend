import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { StationsModule } from './stations/stations.module';
import { VariablesModule } from './variables/variables.module';
import { Variable } from './variables/entities/variable.entity';
import { RulesModule } from './rules/rules.module';
import { StationMessagesModule } from './station-messages/station-messages.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'eu-cdbr-west-03.cleardb.net',
      port: 3306,
      username: 'b4e56112054ab0',
      password: 'b7732892',
      database: 'heroku_699e15c36cbc031',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    StationsModule,
    VariablesModule,
    RulesModule,
    StationMessagesModule,
    NotificationsModule
  ],
  exports: [
    TypeOrmModule,
    UsersModule
  ]
})
export class DomainModule {}