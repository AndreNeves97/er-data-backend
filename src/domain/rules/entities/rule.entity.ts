import { StationMessageVariableData } from "src/domain/station-messages/entities/station-message-variable-data.entity";
import { Station } from "src/domain/stations/entities/station.entity";
import { Variable } from "src/domain/variables/entities/variable.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RuleVariable } from "./rule-variable.entity";

@Entity()
export class Rule extends AbstractModel<Rule> {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @OneToMany(type => RuleVariable, rule_variable => rule_variable.rule, {
    eager: true
  })
  rule_variables?: RuleVariable[];
  
  analyzeVariablesValuesOutOfRule?(variables_data: StationMessageVariableData[]): RuleVariable[] {
    return variables_data
      .map(
        variable_data => {
          return {
            value: variable_data.value,
            rule: this.getRuleOfVariable(variable_data.variable) 
          }
        }
      )
      .filter(object => object.rule.isValueOutOfRule(object.value))
      .map(object => object.rule)
  }

    getRuleOfVariable?(variable) {
      // getRuleOfVariable(variable: Variable) {
      return this.rule_variables.find(rule => rule.isRuleOfVariable(variable));
    }
}
