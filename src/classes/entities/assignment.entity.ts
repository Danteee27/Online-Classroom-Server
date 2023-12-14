import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./class.entity";
import { User } from "src/users/entities/user.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
import e from "express";

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number | null;

  @ManyToOne(() => Class, (classEntity) => classEntity.assignments, {
    eager: true,
  })
  class: Class;

  @ManyToOne(() => User, (user) => user.assignments, {
    eager: true,
  })
  creator: User;

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
