import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";
import { AddClassMembershipDto, CreateAssignmentDto, CreateClassDto, InviteClassMembershipDto } from "./dto/create-class.dto";
import { EntityCondition } from "src/utils/types/entity-condition.type";
import { NullableType } from "src/utils/types/nullable.type";
import { ClassMembership } from "./entities/class-membership.entity";
import { UsersService } from "src/users/users.service";
import { MailService } from "src/mail/mail.service";
import { Assignment } from "./entities/assignment.entity";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";
import { UpdateAssignmentDto } from "./dto/update-class.dto";
export declare class ClassesService {
    private classRepository;
    private usersService;
    private mailService;
    private classMembershipRepository;
    private assignmentRepository;
    private classMembershipAssignmentRepository;
    constructor(classRepository: Repository<Class>, usersService: UsersService, mailService: MailService, classMembershipRepository: Repository<ClassMembership>, assignmentRepository: Repository<Assignment>, classMembershipAssignmentRepository: Repository<ClassMembershipAssignment>);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findAll(): Promise<NullableType<Class[]>>;
    findOne(fields: EntityCondition<Class>): Promise<NullableType<Class>>;
    addClassMembership(id: Class["id"], addMembershipDto: AddClassMembershipDto): Promise<Class>;
    inviteClassmembership(inviteClassMembershipDto: InviteClassMembershipDto): Promise<any>;
    update(id: Class["id"], updateClassDto: CreateClassDto): Promise<Class>;
    createAssignment(classId: Class["id"], createAssignmentDto: CreateAssignmentDto): Promise<Assignment>;
    updateClassMembershipAssignment(classId: Class["id"], assignmentId: Assignment["id"], classMembershipId: ClassMembership["id"], updateClassMembershipAssignmentDto: Partial<ClassMembershipAssignment>): Promise<ClassMembershipAssignment>;
    updateAssignment(classId: Class["id"], assignmentId: Assignment["id"], updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment>;
}
