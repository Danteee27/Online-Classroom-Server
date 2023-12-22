import { ClassMembership } from "src/classes/entities/class-membership.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { FileEntity } from "../../files/entities/file.entity";
import { Role } from "../../roles/entities/role.entity";
import { Status } from "../../statuses/entities/status.entity";
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
    isLocked: boolean;
}
