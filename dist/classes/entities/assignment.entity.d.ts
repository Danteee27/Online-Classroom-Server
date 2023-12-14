import { Class } from "./class.entity";
import { User } from "src/users/entities/user.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
export declare class Assignment {
    id: number | null;
    class: Class;
    creator: User;
    maxGrade: number;
    name: string;
    description: string;
    createdDate: Date;
    dueDate: Date;
    classMembershipAssignments: ClassMembershipAssignment[];
}
