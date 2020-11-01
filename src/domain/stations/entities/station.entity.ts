import { RuleVariable } from "src/domain/rules/entities/rule-variable";
import { Rule } from "src/domain/rules/entities/rule.entity";
import { User } from "src/domain/users/entities/user.entity";
import { Variable } from "src/domain/variables/entities/variable.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  country?: string;

  @Column()
  city?: string;

  @Column()
  coord_lat?: string;

  @Column()
  coord_long?: string;

  @ManyToOne(type => Rule)
  rule?: Rule

  @ManyToMany(type => Variable, variable => variable.stations)
  @JoinTable({
    name: 'station_variables', 
    joinColumn: {name: 'station_id'},
    inverseJoinColumn: {name: 'variable_id'}
  })
  variables?: Variable[];

  @ManyToOne(type => User)
  owner?: User;
}