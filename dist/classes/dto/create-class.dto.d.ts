import { ClassMembershipRole } from "../enums/class-membership-role.enum";
export declare class CreateClassDto {
    userId: string;
    className: string;
    description: string | null;
}
export declare class AddClassMembershipDto {
    userId: string;
    role: ClassMembershipRole;
}
export declare class InviteClassMembershipDto {
    inviterId: string;
    classId: string;
    email: string;
    role: ClassMembershipRole;
}
export declare class CreateAssignmentDto {
    creatorId: string;
    name: string;
    description: string;
    maxGrade: number;
    dueDate: Date;
}
