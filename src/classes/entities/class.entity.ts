import { EntityHelper } from "src/utils/entity-helper";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClassMembership } from "./class-membership.entity";
import { Assignment } from "./assignment.entity";

@Entity()
export class Class extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  className: string;

  @Column({ type: String, unique: true, generated: "uuid" })
  classCode: string;

  @Column({ type: String, nullable: true })
  description: string;

  @OneToMany(() => ClassMembership, (classMembership) => classMembership.class)
  classMemberships: ClassMembership[];

  @OneToMany(() => Assignment, (Assignment) => Assignment.class)
  assignments: Assignment[];

  @Column({ type: Date, default: new Date() })
  createdAt: Date;

  @Column({ type: Boolean, default: true })
  active: boolean;
}
