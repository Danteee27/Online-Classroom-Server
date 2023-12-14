import { NullableType } from "src/utils/types/nullable.type";
import { ClassesService } from "./classes.service";
import { AddClassMembershipDto, CreateAssignmentDto, CreateClassDto, InviteClassMembershipDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { Assignment } from "./entities/assignment.entity";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findAll(): Promise<NullableType<Class[]>>;
    createAssigment(id: string, createAssignmentDto: CreateAssignmentDto): Promise<Assignment>;
    addClassMember(id: string, createClassMemberDto: AddClassMembershipDto): Promise<Class>;
    inviteClassMember(inviteClassMembershipDto: InviteClassMembershipDto): Promise<Class>;
    findOne(id: string): Promise<NullableType<Class>>;
}
