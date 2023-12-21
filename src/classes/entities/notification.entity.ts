import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClassMembership } from "./class-membership.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  title: string;

  @Column({ type: String })
  description: string;

  @ManyToOne(() => ClassMembership, (user) => user.sentNotifications, {
    eager: true,
  })
  sender: ClassMembership;

  @ManyToOne(() => ClassMembership, (user) => user.receivedNotifications, {
    eager: true,
  })
  receiver: ClassMembership;

  @ManyToOne(
    () => ClassMembershipAssignment,
    (assignment) => assignment.notifications,
    {
      eager: true,
    }
  )
  classMembershipAssignment: ClassMembershipAssignment;

  @Column({ type: Boolean, default: false })
  isRead: boolean;

  @Column({ type: Date })
  createdAt: Date;

  @Column({ type: Boolean, default: false })
  deleted: boolean;
}
