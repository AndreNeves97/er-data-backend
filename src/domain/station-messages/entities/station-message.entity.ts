import { Station } from "src/domain/stations/entities/station.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StationMessageVariableData } from "./station-message-variable-data.entity";

@Entity()
export class StationMessage extends AbstractModel<StationMessage> {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  date?: Date;

  @Column()
  coord_lat?: string;

  @Column()
  coord_long?: string;

  @ManyToOne(type => Station, station => station.messages, {nullable: false})
  @JoinColumn({ name: "station_id"})
  station?: Station;

  @OneToMany(type => StationMessageVariableData, variables_data => variables_data.station_message, {
    eager: true
  })
  variables_data?: StationMessageVariableData[]
}
