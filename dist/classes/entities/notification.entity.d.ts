import { ClassMembership } from "./class-membership.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
export declare class Notification {
    id: number;
    title: string;
    description: string;
    sender: ClassMembership;
    receiver: ClassMembership;
    classMembershipAssignment: ClassMembershipAssignment;
    isRead: boolean;
    createdAt: Date;
    deleted: boolean;
}
