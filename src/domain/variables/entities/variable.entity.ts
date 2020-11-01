import { RuleVariable } from "src/domain/rules/entities/rule-variable.entity";
import { Station } from "src/domain/stations/entities/station.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Variable extends AbstractModel<Variable> {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name?: string

  @Column()
  unity?: string

  @Column()
  min_value?: number

  @Column()
  max_value?: number

  @OneToMany(type => RuleVariable, rule_variable => rule_variable.variable)
  rule_variables?: RuleVariable[];

  @ManyToMany(type => Station, station => station.variables)
  stations?: Station[];

  equals?(object: Variable) {
    if(this === object) return true;
    if(this.id === object.id) return true;
    
    return false;
  }
}
