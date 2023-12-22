import { ClassMembershipRole } from "../enums/class-membership-role.enum";
export declare class CreateClassDto {
    userId: string;
    className: string;
    description: string;
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
export declare class CreateClassMembershipAssignmentDto {
    classMembershipId: string;
    assignmentId: string;
}
export declare class CreateNotificationDto {
    senderId: string;
    receiverId: string;
    classMembershipAssignmentId: string;
    title: string;
    description: string;
}
