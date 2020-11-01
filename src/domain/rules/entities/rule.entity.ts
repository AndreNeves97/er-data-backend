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

  
  // rules_variables: RuleVariable[];
  // analyzeVariablesValuesOutOfRule(messageVariables: DeviceMessageVariable[]) {
  //   // analyzeVariablesValuesOutOfRule(messageVariables: DeviceMessageVariable[]): Variable[] {
  //     return messageVariables
  //       .map(
  //         messageVariable => {
  //           return {
  //             value: messageVariable.value,
  //             rule: this.getRuleOfVariable(messageVariable.variable) 
  //           }
  //         }
  //       )
  //       .filter(object => object.rule.isValueOutOfRule(object.value))
  //       .map(object => object.rule.variable)
  //   }
  
  //   /// benchmark this function
  //   getRuleOfVariable(variable) {
  //     // getRuleOfVariable(variable: Variable) {
  //     return this.rules_variables.find(
  //       rule => rule.variable.equals(variable)
  //     );
  //   }
}
