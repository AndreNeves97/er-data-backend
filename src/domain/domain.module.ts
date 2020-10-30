import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { DevicesModule } from './devices/devices.module';
import { StationsModule } from './stations/stations.module';

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
        User
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    DevicesModule,
    StationsModule
  ],
  exports: [
    TypeOrmModule,
    UsersModule
  ]
})
export class DomainModule {}
