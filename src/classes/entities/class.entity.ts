import { EntityHelper } from "src/utils/entity-helper";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClassMembership } from "./class-membership.entity";

@Entity()
export class Class extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  className: string;

  @Column({ type: String, unique: true })
  classCode: string;

  @Column({ type: String, nullable: true })
  description: string | null;

  @OneToMany(() => ClassMembership, (classMembership) => classMembership.class)
  classMemberships: ClassMembership[];
}
