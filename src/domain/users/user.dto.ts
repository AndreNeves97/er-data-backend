
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserCreateDto {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  firebase_uid: string;

  @Column({ nullable: true })
  birth_date: Date;
} 