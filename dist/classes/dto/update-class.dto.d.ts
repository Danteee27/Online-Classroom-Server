import { ClassMembershipRole } from "../enums/class-membership-role.enum";
export declare class UpdateClassDto {
    className?: string;
    description?: string;
    active?: boolean;
}
export declare class UpdateAssignmentDto {
    maxGrade?: number;
    name?: string;
    description?: string;
    dueDate?: Date;
    deleted?: boolean;
    order?: number;
}
export declare class UpdateClassMembershipAssignmentDto {
    currentGrade?: number;
    studentExplanation?: string;
    expectedGrade?: number;
    grade?: number;
    description?: string;
    teacherComment?: string;
    studentComment?: string;
    teacherFinalisedComment?: string;
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
