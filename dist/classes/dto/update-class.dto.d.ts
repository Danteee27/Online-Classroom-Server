export declare class UpdateAssignmentDto {
    maxGrade?: number;
    name?: string;
    description?: string;
    dueDate?: Date;
    deleted?: boolean;
}
export declare class UpdateClassMembershipAssignmentDto {
    currentGrade?: number;
    grade?: number;
    description?: string;
    studentReview?: string;
    teacherComment?: string;
    isFinalised?: boolean;
}
