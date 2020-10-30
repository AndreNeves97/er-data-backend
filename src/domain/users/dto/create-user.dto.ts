import { Column } from 'typeorm';
import { PartialType } from '@nestjs/mapped-types';
import { UpdateUserDto } from './update-user.dto';

export class CreateUserDto extends PartialType(UpdateUserDto) {
  @Column()
  email: string;

  @Column()
  firebase_uid: string;
}
