import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserCreateDto } from './user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  
  @Post()
  async create(@Body() create_dto: UserCreateDto): Promise<User> {
    return this.service.create(create_dto);
  }
}
