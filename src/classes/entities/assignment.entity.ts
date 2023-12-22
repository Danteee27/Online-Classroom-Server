import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
import { ClassMembership } from "./class-membership.entity";
import { Class } from "./class.entity";

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number | null;

  @ManyToOne(() => Class, (classEntity) => classEntity.assignments, {
    eager: true,
  })
  class: Class;

  @ManyToOne(
    () => ClassMembership,
    (classMembership) => classMembership.assignments,
    {
      eager: true,
    }
  )
  creator: ClassMembership;

  @Column({ type: Number })
  maxGrade: number;

  @Column({ type: String })
  name: string;

  @Column()
  description: string;

  @Column()
  createdDate: Date;

  @Column()
  dueDate: Date;

  @OneToMany(
    () => ClassMembershipAssignment,
    (classMembershipAssignment) => classMembershipAssignment.assignment
  )
  classMembershipAssignments: ClassMembershipAssignment[];

  @Column({ type: Boolean, default: false })
  deleted: boolean;
}
