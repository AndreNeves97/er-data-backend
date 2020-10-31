import { Variable } from "src/domain/variables/entities/variable.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rule } from "./rule.entity";

@Entity()
export class RuleVariable extends AbstractModel<RuleVariable> {
  @ManyToOne(type => Variable, variable => variable.rule_variables, {
    primary: true,
    eager: true
  })
  @JoinColumn({ name: "variable_id"})
  variable?: Variable

  @ManyToOne(type => Rule, rule => rule.rule_variables, { primary: true })
  @JoinColumn({ name: "rule_id"})
  rule?: Rule

  @Column()
  min_value?: number

  @Column()
  max_value?: number
  
  isValueOutOfRule?(value: number): boolean {
    return  value < this.min_value ||
            value > this.max_value ||
            value < this.variable.min_value ||
            value > this.variable.max_value
  }
}
