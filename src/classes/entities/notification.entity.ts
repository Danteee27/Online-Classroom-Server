import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  title: string;

  @Column({ type: String })
  description: string;

  @ManyToOne(() => User, (user) => user.sentNotifications, {
    eager: true,
  })
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedNotifications, {
    eager: true,
  })
  receiver: User;

  @Column({ type: Boolean, default: false })
  isRead: boolean;

  @Column({ type: Date })
  createdAt: Date;

  @Column({ type: Boolean, default: false })
  deleted: boolean;
}
