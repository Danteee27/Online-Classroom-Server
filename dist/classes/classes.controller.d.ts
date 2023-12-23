import { NullableType } from "src/utils/types/nullable.type";
import { ClassesService } from "./classes.service";
import { CreateAssignmentDto, CreateClassDto, CreateClassMembershipDto, InviteClassMembershipDto, MapUserToClassMembershipDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { Assignment } from "./entities/assignment.entity";
import { UpdateAssignmentDto, UpdateClassMembershipAssignmentDto, UpdateClassMembershipDto } from "./dto/update-class.dto";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";
import { ClassMembership } from "./entities/class-membership.entity";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findAll(): Promise<NullableType<Class[]>>;
    createAssignment(id: string, createAssignmentDto: CreateAssignmentDto): Promise<Assignment>;
    findUserNotifications(userId: string): Promise<import("./entities/notification.entity").Notification[]>;
    updateAssignment(id: string, assignmentId: string, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment>;
    updateClassMembershipAssignment(classId: string, assignmentId: string, classMembershipId: string, updateClassMembershipAssignmentDto: UpdateClassMembershipAssignmentDto): Promise<ClassMembershipAssignment>;
    mapUserToClassMembership(mapUserToClassMembershipDto: MapUserToClassMembershipDto): Promise<ClassMembership[]>;
    addClassMembershipAssignment(classId: string, assignmentId: string, classMembershipId: string): Promise<ClassMembershipAssignment>;
    createClassMembership(id: string, createClassMembershipDto: CreateClassMembershipDto): Promise<ClassMembership>;
    updateClassMembership(id: string, classMembershipId: string, updateClassMembershipDto: UpdateClassMembershipDto): Promise<ClassMembership>;
    inviteClassMember(inviteClassMembershipDto: InviteClassMembershipDto): Promise<Class>;
    findByClassCode(classCode: string): Promise<NullableType<Class>>;
    findOne(id: string): Promise<NullableType<Class>>;
}
