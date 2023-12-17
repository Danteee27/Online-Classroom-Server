import { EntityHelper } from "src/utils/entity-helper";
import { ClassMembership } from "./class-membership.entity";
import { Assignment } from "./assignment.entity";
export declare class Class extends EntityHelper {
    id: number;
    className: string;
    classCode: string;
    description: string;
    classMemberships: ClassMembership[];
    assignments: Assignment[];
}
