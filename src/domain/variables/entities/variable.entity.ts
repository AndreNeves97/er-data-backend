import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Variable {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @Column()
  unity: string

  @Column()
  min_value: number

  @Column()
  max_value: number

  equals(object: Variable) {
    if(this === object) return true;
    if(this.id === object.id) return true;
    
    return false;
  }
}
