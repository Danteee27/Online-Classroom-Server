import { EntityHelper } from "src/utils/entity-helper";
import { ClassMembership } from "./class-membership.entity";
export declare class Class extends EntityHelper {
    id: number;
    className: string;
    classCode: string;
    description: string | null;
    classMemberships: ClassMembership[];
}
