import { Class } from "./class.entity";
import { User } from "src/users/entities/user.entity";
import { ClassMembershipAssignment } from "./class-membership-assignment.entity";
export declare class Assigment {
    id: number | null;
    class: Class;
    user: User;
    maxGrade: number;
    description: string;
    classMembershipAssignments: ClassMembershipAssignment[];
}
