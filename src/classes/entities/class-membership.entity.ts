import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClassMembershipRole } from "../enums/class-membership-role.enum";
import { User } from "src/users/entities/user.entity";
import { Class } from "./class.entity";

@Entity()
export class ClassMembership {
  @PrimaryGeneratedColumn()
  id: number;

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
}
