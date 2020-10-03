import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserStatus } from './users.entity';
import { UserCreateDto } from './user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async create(user_create: UserCreateDto): Promise<User> {
    const user = new User();

    const {
      first_name,
      last_name,
      email,
      image,
      firebase_uid,
      birth_date
    } = user_create;

    
    Object.assign(user, {
      first_name,
      last_name,
      email,
      image,
      firebase_uid,
      birth_date
    });

    
    user.register_date = new Date();
    user.status = UserStatus.ACTIVE;

    return await this.repository.save(user);
  }
}
