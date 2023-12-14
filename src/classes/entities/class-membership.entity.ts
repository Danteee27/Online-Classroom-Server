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
}
