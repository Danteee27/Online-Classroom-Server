import { Assignment } from "./assignment.entity";
import { ClassMembership } from "./class-membership.entity";
import { Notification } from "./notification.entity";
export declare class ClassMembershipAssignment {
    id: number | null;
    assignment: Assignment;
    classMembership: ClassMembership;
    currentGrade: number | null;
    expectedGrade: number | null;
    studentExplanation: string | null;
    grade: number | null;
    description: string | null;
    studentComment: string | null;
    teacherComment: string | null;
    teacherFinalisedComment: string | null;
    isFinalised: boolean;
    isRequested: boolean;
    isReviewed: boolean;
    isSubmitted: boolean;
    notifications: Notification[];
    createdAt: Date;
}
