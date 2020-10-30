import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from './domain/domain.module';
import { User } from './domain/users/entities/user.entity';
import { UsersService } from './domain/users/users.service';
import { AuthorizationGuard } from './shared/guards/authorization.guard';


@Module({
  imports: [
    DomainModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthorizationGuard },
    UsersService
  ]
})
export class AppModule {}
