import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClassMembershipRole } from "../enums/class-membership-role.enum";
import { User } from "src/users/entities/user.entity";
import { Class } from "./class.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
import { Notification } from "./notification.entity";
import { Assignment } from "./assignment.entity";
@Entity()
export class ClassMembership {
  @PrimaryGeneratedColumn()
  id: number | null;

  @ManyToOne(() => User, (user) => user.classMemberships, {
    eager: true,
  })
  user: User;

  @ManyToOne(() => Class, (classEntity) => classEntity.classMemberships, {
    eager: true,
  })
  class: Class;

  @Column({
    type: "enum",
    enum: ClassMembershipRole,
    default: ClassMembershipRole.STUDENT,
  })
  role: ClassMembershipRole;

  @OneToMany(
    () => ClassMembershipAssignment,
    (classMembershipAssignment) => classMembershipAssignment.classMembership
  )
  classMembershipAssignments: ClassMembershipAssignment[];

  @OneToMany(() => Notification, (notification) => notification.sender)
  sentNotifications: Notification[];

  @OneToMany(() => Notification, (notification) => notification.receiver)
  receivedNotifications: Notification[];

  @OneToMany(() => Assignment, (assignment) => assignment.creator)
  assignments: Assignment[];
}
