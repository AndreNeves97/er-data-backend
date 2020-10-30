import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserStatus } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, {
      ...createUserDto,
      register_date: new Date(),
      status: UserStatus.ACTIVE
    });

    return await this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  findOneByFirebaseUid(uid: string): Promise<User> {
    return this.repository.findOne({
      where: [
        {firebase_uid: uid}
      ]
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
