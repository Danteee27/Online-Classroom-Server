import { User } from "src/users/entities/user.entity";
export declare class Notification {
    id: number;
    title: string;
    description: string;
    sender: User;
    receiver: User;
    isRead: boolean;
    createdAt: Date;
    deleted: boolean;
}
