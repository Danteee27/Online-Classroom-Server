import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Assignment } from "./assignment.entity";
import { ClassMembership } from "./class-membership.entity";
import { Notification } from "./notification.entity";

@Entity()
export class ClassMembershipAssignment {
  @PrimaryGeneratedColumn()
  id: number | null;

  @ManyToOne(
    () => Assignment,
    (assignment) => assignment.classMembershipAssignments,
    { eager: true }
  )
  assignment: Assignment;

  @ManyToOne(
    () => ClassMembership,
    (classMembership) => classMembership.classMembershipAssignments
  )
  classMembership: ClassMembership;

  @Column({ type: Number, nullable: true })
  currentGrade: number | null;

  @Column({ type: Number, nullable: true })
  expectedGrade: number | null;

  @Column({ type: String, nullable: true })
  studentExplanation: string | null;

  @Column({ type: Number, nullable: true })
  grade: number | null;

  @Column({ type: String, nullable: true })
  description: string | null;

  @Column({ type: String, nullable: true })
  studentComment: string | null;

  @Column({ type: String, nullable: true })
  teacherComment: string | null;

  @Column({ type: String, nullable: true })
  teacherFinalisedComment: string | null;

  @Column({ type: Boolean, default: false })
  isFinalised: boolean;

  @Column({ type: Boolean, default: false })
  isRequested: boolean;

  @Column({ type: Boolean, default: false })
  isReviewed: boolean;

  @Column({ type: Boolean, default: false })
  isSubmitted: boolean;

  @OneToMany(
    () => Notification,
    (notification) => notification.classMembershipAssignment
  )
  notifications: Notification[];

  @Column({ type: Date, default: new Date() })
  createdAt: Date;
}
