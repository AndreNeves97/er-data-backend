import { Station } from "src/domain/stations/entities/station.entity";
import { AbstractModel } from "src/shared/models/abstract-entity.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification extends AbstractModel<Notification> {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column()
  message?: string;

  @Column()
  date?: Date;

  @ManyToOne(type => Station, station =>  station.notifications, {
    nullable: false
  })
  @JoinColumn({ name: "station_id"})
  station?: Station
}
