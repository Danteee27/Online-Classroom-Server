import { NullableType } from "src/utils/types/nullable.type";
import { ClassesService } from "./classes.service";
import { AddClassMembershipDto, CreateAssignmentDto, CreateClassDto, InviteClassMembershipDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { Assignment } from "./entities/assignment.entity";
import { UpdateAssignmentDto, UpdateClassMembershipAssignmentDto } from "./dto/update-class.dto";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findAll(): Promise<NullableType<Class[]>>;
    createAssignment(id: string, createAssignmentDto: CreateAssignmentDto): Promise<Assignment>;
    findUserNotifications(userId: string): Promise<import("./entities/notification.entity").Notification[]>;
    updateAssignment(id: string, assignmentId: string, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment>;
    updateClassMembershipAssignment(classId: string, assignmentId: string, classMembershipId: string, updateClassMembershipAssignmentDto: UpdateClassMembershipAssignmentDto): Promise<ClassMembershipAssignment>;
    addClassMembershipAssignment(classId: string, assignmentId: string, classMembershipId: string): Promise<ClassMembershipAssignment>;
    addClassMember(id: string, createClassMemberDto: AddClassMembershipDto): Promise<Class>;
    inviteClassMember(inviteClassMembershipDto: InviteClassMembershipDto): Promise<Class>;
    findByClassCode(classCode: string): Promise<NullableType<Class>>;
    findOne(id: string): Promise<NullableType<Class>>;
}
