import { RuleVariable } from "src/domain/rules/entities/rule-variable";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  equals?(object: Variable) {
    if(this === object) return true;
    if(this.id === object.id) return true;
    
    return false;
  }
}
