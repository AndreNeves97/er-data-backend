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

    const {
      first_name,
      last_name,
      email,
      image,
      firebase_uid,
      birth_date
    } = createUserDto;

    
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

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  async findOneByFirebaseUid(uid: string): Promise<User> {
    return this.repository.findOne({
      where: [
        {firebase_uid: uid}
      ]
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const {
      first_name,
      last_name,
      image,
      birth_date
    } = updateUserDto;

    updateUserDto = new UpdateUserDto();

    Object.assign(updateUserDto, {
      first_name,
      last_name,
      image,
      birth_date
    });


    return this.repository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
