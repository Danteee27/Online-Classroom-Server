import { ClassMembershipRole } from "../enums/class-membership-role.enum";
import { User } from "src/users/entities/user.entity";
import { Class } from "./class.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
import { Notification } from "./notification.entity";
import { Assignment } from "./assignment.entity";
export declare class ClassMembership {
    id: number | null;
    user: User;
    class: Class;
    role: ClassMembershipRole;
    classMembershipAssignments: ClassMembershipAssignment[];
    sentNotifications: Notification[];
    receivedNotifications: Notification[];
    assignments: Assignment[];
}
