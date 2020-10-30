import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  // rules_variables: RuleVariable[];

  
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
