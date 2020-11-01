import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { StationsModule } from './stations/stations.module';
import { VariablesModule } from './variables/variables.module';
import { Variable } from './variables/entities/variable.entity';
import { RulesModule } from './rules/rules.module';
import { StationMessagesModule } from './station-messages/station-messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'erdata',
      entities: [
        User,
        Variable
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    StationsModule,
    VariablesModule,
    RulesModule,
    StationMessagesModule
  ],
  exports: [
    TypeOrmModule,
    UsersModule
  ]
})
export class DomainModule {}
