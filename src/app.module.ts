import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/users/users.entity';
import { UsersModule } from './domain/users/user.module';
import { DeviceDataModule } from './domain/device-messages/device-data.module';
import { DeviceData } from './domain/device-messages/device-data.entity';
import { DeviceModule } from './domain/devices/device.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'erdata',
      entities: [User, DeviceData],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    DeviceDataModule,
    DeviceModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
