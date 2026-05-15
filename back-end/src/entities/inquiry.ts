import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Inquiry {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  serviceType!: string;

  @Column()
  eventDate!: Date;

  @Column()
  eventLocation!: string;

  @Column({
    type: "text",
  })
  message!: string;

  @Column({
    default: "pending",
  })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}