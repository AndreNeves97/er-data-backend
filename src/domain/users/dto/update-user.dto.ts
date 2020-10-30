import { Column } from 'typeorm';

export class UpdateUserDto {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  birth_date: Date;
}