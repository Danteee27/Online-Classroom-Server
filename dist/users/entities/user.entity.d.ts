import { Role } from "../../roles/entities/role.entity";
import { Status } from "../../statuses/entities/status.entity";
import { FileEntity } from "../../files/entities/file.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { ClassMembership } from "src/classes/entities/class-membership.entity";
import { Assignment } from "src/classes/entities/assignment.entity";
export declare class User extends EntityHelper {
    id: number;
    email: string | null;
    password: string;
    provider: string;
    socialId: string | null;
    firstName: string | null;
    lastName: string | null;
    photo?: FileEntity | null;
    role?: Role | null;
    status?: Status;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    classMemberships: ClassMembership[];
    assignments: Assignment[];
}
