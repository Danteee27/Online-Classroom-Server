import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
import { ClassMembership } from "./class-membership.entity";
import { Class } from "./class.entity";
export declare class Assignment {
    id: number | null;
    class: Class;
    creator: ClassMembership;
    maxGrade: number;
    name: string;
    description: string;
    createdDate: Date;
    dueDate: Date;
    classMembershipAssignments: ClassMembershipAssignment[];
    deleted: boolean;
    order: number | null;
}
