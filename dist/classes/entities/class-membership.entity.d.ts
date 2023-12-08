import { ClassMembershipRole } from "../enums/class-membership-role.enum";
import { User } from "src/users/entities/user.entity";
import { Class } from "./class.entity";
export declare class ClassMembership {
    id: number;
    user: User;
    class: Class;
    role: ClassMembershipRole;
}
