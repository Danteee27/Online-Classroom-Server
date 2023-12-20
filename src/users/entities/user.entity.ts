import { Exclude, Expose } from "class-transformer";
import { AuthProvidersEnum } from "src/auth/auth-providers.enum";
import { Assignment } from "src/classes/entities/assignment.entity";
import { ClassMembership } from "src/classes/entities/class-membership.entity";
import { EntityHelper } from "src/utils/entity-helper";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FileEntity } from "../../files/entities/file.entity";
import { Role } from "../../roles/entities/role.entity";
import { Status } from "../../statuses/entities/status.entity";
import { Notification } from "src/classes/entities/notification.entity";
@Entity()
export class User extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, unique: true, nullable: true })
  @Expose({ groups: ["me", "admin"] })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ default: AuthProvidersEnum.email })
  @Expose({ groups: ["me", "admin"] })
  provider: string;

  @Index()
  @Column({ type: String, nullable: true })
  @Expose({ groups: ["me", "admin"] })
  socialId: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  lastName: string | null;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @ManyToOne(() => Role, {
    eager: true,
  })
  role?: Role | null;

  @ManyToOne(() => Status, {
    eager: true,
  })
  status?: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => ClassMembership, (classMembership) => classMembership.user)
  classMemberships: ClassMembership[];

  @OneToMany(() => Assignment, (Assignment) => Assignment.creator)
  assignments: Assignment[];

  @OneToMany(() => Notification, (notification) => notification.sender)
  sentNotifications: Notification[];

  @OneToMany(() => Notification, (notification) => notification.receiver)
  receivedNotifications: Notification[];

  @Column({ type: Boolean, default: false })
  isLocked: boolean;
}
