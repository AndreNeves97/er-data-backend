import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './users.dto';
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
    return this.service.insert(create_dto);
  }
}
