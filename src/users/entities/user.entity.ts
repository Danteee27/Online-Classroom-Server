import {
  Column,
  AfterLoad,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { Role } from "../../roles/entities/role.entity";
import { Status } from "../../statuses/entities/status.entity";
import { FileEntity } from "../../files/entities/file.entity";
import bcrypt from "bcryptjs";
import { EntityHelper } from "src/utils/entity-helper";
import { AuthProvidersEnum } from "src/auth/auth-providers.enum";
import { Exclude, Expose } from "class-transformer";
import { ClassMembership } from "src/classes/entities/class-membership.entity";
import { Assignment } from "src/classes/entities/assignment.entity";

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

  @Column({ type: Boolean, default: false })
  isLocked: boolean;
}
