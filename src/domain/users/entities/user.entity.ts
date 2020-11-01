import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive"
}


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column()
  register_date: Date;

  @Column({
      type: "enum",
      enum: UserStatus
  })
  status: UserStatus;


  // @ManyToMany(type => Device)
  // @JoinTable({name: 'users_devices'})
  // favorite_devices: Device[];
}