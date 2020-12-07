import { Variable } from "src/domain/variables/entities/variable.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StationMessage } from "./station-message.entity";

@Entity()
export class StationMessageVariableData extends AbstractModel<StationMessageVariableData> {
  @ManyToOne(type => StationMessage, station_message => station_message.variables_data, {
    primary: true
  })
  @JoinColumn({ name: "station_message_id"})
  station_message?: StationMessage
  
  @ManyToOne(type => Variable, variable => variable.rule_variables, {
    primary: true,
    eager: true
  })
  @JoinColumn({ name: "variable_id"})
  variable?: Variable

  @Column("double")
  value?: number

  @Column({ default: false })
  inside_the_limits: boolean
}
