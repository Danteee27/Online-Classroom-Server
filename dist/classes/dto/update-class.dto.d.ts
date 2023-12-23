import { ClassMembershipRole } from "../enums/class-membership-role.enum";
export declare class UpdateAssignmentDto {
    maxGrade?: number;
    name?: string;
    description?: string;
    dueDate?: Date;
    deleted?: boolean;
}
export declare class UpdateClassMembershipAssignmentDto {
    currentGrade?: number;
    expectedGrade?: number;
    grade?: number;
    description?: string;
    studentReview?: string;
    teacherComment?: string;
    isFinalised?: boolean;
    isRequested?: boolean;
    isReviewed?: boolean;
    isSubmitted?: boolean;
}
export declare class UpdateClassMembershipDto {
    userId?: string;
    fullName?: string;
    role?: ClassMembershipRole;
}
