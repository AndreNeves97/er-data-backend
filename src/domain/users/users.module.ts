import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { StationsModule } from '../stations/stations.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), StationsModule],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
