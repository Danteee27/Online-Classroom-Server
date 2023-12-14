import { Assignment } from "./assignment.entity";
import { ClassMembership } from "./class-membership.entity";
export declare class ClassMembershipAssignment {
    id: number | null;
    assignment: Assignment;
    classMembership: ClassMembership;
    currentGrade: number | null;
    grade: number | null;
    description: string | null;
    studentReview: string | null;
    teacherComment: string | null;
    isFinalised: boolean;
}
