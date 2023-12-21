"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_entity_1 = require("./entities/class.entity");
const typeorm_2 = require("typeorm");
const class_membership_entity_1 = require("./entities/class-membership.entity");
const users_service_1 = require("../users/users.service");
const mail_service_1 = require("../mail/mail.service");
const class_membership_role_enum_1 = require("./enums/class-membership-role.enum");
const assignment_entity_1 = require("./entities/assignment.entity");
const class_membership_assignment_entity_1 = require("./entities/class-membership-assignment.entity");
const notification_entity_1 = require("./entities/notification.entity");
let ClassesService = class ClassesService {
    constructor(classRepository, usersService, mailService, classMembershipRepository, assignmentRepository, classMembershipAssignmentRepository, notificationRepository) {
        this.classRepository = classRepository;
        this.usersService = usersService;
        this.mailService = mailService;
        this.classMembershipRepository = classMembershipRepository;
        this.assignmentRepository = assignmentRepository;
        this.classMembershipAssignmentRepository = classMembershipAssignmentRepository;
        this.notificationRepository = notificationRepository;
    }
    async create(createClassDto) {
        let classEntity = this.classRepository.create(createClassDto);
        classEntity = await this.classRepository.save(classEntity);
        const user = await this.usersService.findOne({
            id: +createClassDto.userId,
        });
        if (!user) {
            throw new common_1.HttpException("User not found", 404);
        }
        const classMembership = this.classMembershipRepository.create({
            user,
            class: classEntity,
            role: class_membership_role_enum_1.ClassMembershipRole.TEACHER,
        });
        classEntity.classMemberships = [classMembership];
        user.classMemberships = [...user.classMemberships, classMembership];
        await this.classRepository.save(classEntity);
        await this.usersService.update(user.id, user);
        await this.classMembershipRepository.save(classMembership);
        return classEntity;
    }
    findAll() {
        return this.classRepository.find({
            relations: ["classMemberships"],
        });
    }
    findOne(fields) {
        return this.classRepository.findOne({
            where: fields,
            relations: ["classMemberships", "assignments"],
        });
    }
    async addClassMembership(id, addMembershipDto) {
        let classEntity = await this.classRepository.findOne({
            where: { id },
            relations: ["classMemberships"],
        });
        if (!classEntity) {
            throw new common_1.HttpException("Class not found", 404);
        }
        let user = await this.usersService.findOne({
            id: +addMembershipDto.userId,
        });
        if (!user) {
            throw new common_1.HttpException("User not found", 404);
        }
        if (classEntity.classMemberships.find((classMembership) => classMembership.user.id === +addMembershipDto.userId)) {
            throw new common_1.HttpException("User already in class", 400);
        }
        let classMembership = await this.classMembershipRepository.save(this.classMembershipRepository.create({
            user,
            class: classEntity,
            role: addMembershipDto.role,
        }));
        classEntity.classMemberships.push(classMembership);
        return await this.classRepository.save(classEntity);
    }
    async inviteClassmembership(inviteClassMembershipDto) {
        let classEntity = await this.classRepository.findOne({
            where: { id: +inviteClassMembershipDto.classId },
            relations: ["classMemberships"],
        });
        if (!classEntity) {
            throw new common_1.HttpException("Class not found", 404);
        }
        let user = await this.usersService.findOne({
            email: inviteClassMembershipDto.email,
        });
        if (!user) {
            throw new common_1.HttpException("User not found", 404);
        }
        let inviter = await this.usersService.findOne({
            id: +inviteClassMembershipDto.inviterId,
        });
        if (!inviter) {
            throw new common_1.HttpException("Inviter not found", 404);
        }
        const inviterClassMembership = inviter.classMemberships.find((classMembership) => classMembership.class.id === +inviteClassMembershipDto.classId);
        if ((inviterClassMembership === null || inviterClassMembership === void 0 ? void 0 : inviterClassMembership.role) !== class_membership_role_enum_1.ClassMembershipRole.TEACHER ||
            inviterClassMembership.class.id !== classEntity.id) {
            throw new common_1.HttpException("Inviter is not a teacher of this class", 400);
        }
        if (classEntity.classMemberships.find((classMembership) => classMembership.user.id === (user === null || user === void 0 ? void 0 : user.id))) {
            throw new common_1.HttpException("User already in class", 400);
        }
        this.mailService.classInvitation({
            to: inviteClassMembershipDto.email,
            data: {
                userId: user.id,
                role: inviteClassMembershipDto.role,
                inviter: inviter.firstName + " " + inviter.lastName,
                className: classEntity.className,
                inviterId: inviter.id,
                classId: classEntity.id,
            },
        });
    }
    async update(id, updateClassDto) {
        let classEntity = await this.classRepository.findOne({
            where: { id },
            relations: ["classMemberships"],
        });
        if (!classEntity) {
            throw new common_1.HttpException("Class not found", 404);
        }
        classEntity = this.classRepository.merge(classEntity, updateClassDto);
        return await this.classRepository.save(classEntity);
    }
    async createAssignment(classId, createAssignmentDto) {
        let classEntity = await this.classRepository.findOne({
            where: { id: +classId },
            relations: [
                "classMemberships",
                "assignments",
                "classMemberships.classMembershipAssignments",
            ],
        });
        if (!classEntity) {
            throw new common_1.HttpException("Class not found", 404);
        }
        let creator = await this.usersService.findOne({
            id: +createAssignmentDto.creatorId,
        });
        if (!creator) {
            throw new common_1.HttpException("Creator not found", 404);
        }
        let assignment = this.assignmentRepository.create(Object.assign(Object.assign({}, createAssignmentDto), { class: classEntity, creator: creator, createdDate: new Date() }));
        await this.assignmentRepository.save(assignment);
        classEntity.assignments = [...classEntity.assignments, assignment];
        creator.assignments = [...creator.assignments, assignment];
        classEntity.classMemberships.forEach(async (classMembership) => {
            let classMembershipAssignment = await this.classMembershipAssignmentRepository.save(this.classMembershipAssignmentRepository.create({
                classMembership,
                assignment,
            }));
            classMembership.classMembershipAssignments = [
                ...classMembership.classMembershipAssignments,
                classMembershipAssignment,
            ];
        });
        await this.classRepository.save(classEntity);
        await this.usersService.update(creator.id, creator);
        await this.classMembershipRepository.save(classEntity.classMemberships);
        return assignment;
    }
    async updateClassMembershipAssignment(classId, assignmentId, classMembershipId, updateClassMembershipAssignmentDto) {
        if (!assignmentId || !classMembershipId) {
            throw new common_1.HttpException("Missing assignmentId or classMembershipId", 400);
        }
        const classMembershipAssignment = await this.classMembershipAssignmentRepository.findOne({
            where: {
                assignment: { id: +assignmentId },
                classMembership: { id: +classMembershipId },
            },
        });
        if (!classMembershipAssignment) {
            throw new common_1.HttpException("ClassMembershipAssignment not found", 404);
        }
        const updatedClassMembershipAssignment = this.classMembershipAssignmentRepository.merge(classMembershipAssignment, updateClassMembershipAssignmentDto);
        return this.classMembershipAssignmentRepository.save(updatedClassMembershipAssignment);
    }
    async updateAssignment(classId, assignmentId, updateAssignmentDto) {
        if (!assignmentId) {
            throw new common_1.HttpException("Missing assignmentId", 400);
        }
        const assignment = await this.assignmentRepository.findOne({
            where: { id: +assignmentId, class: { id: +classId } },
        });
        if (!assignment) {
            throw new common_1.HttpException("Assignment not found", 404);
        }
        const updatedAssignment = this.assignmentRepository.merge(assignment, updateAssignmentDto);
        return this.assignmentRepository.save(updatedAssignment);
    }
    async createNotification(createNotificationDto) {
        const sender = await this.classMembershipRepository.findOne({
            where: { id: +createNotificationDto.senderId },
        });
        if (!sender) {
            throw new common_1.HttpException("Sender not found", 404);
        }
        const receiver = await this.classMembershipRepository.findOne({
            where: { id: +createNotificationDto.receiverId },
        });
        if (!receiver) {
            throw new common_1.HttpException("Receiver not found", 404);
        }
        const classMembershipAssignment = await this.classMembershipAssignmentRepository.findOne({
            where: {
                id: +createNotificationDto.classMembershipAssignmentId,
            },
        });
        if (!classMembershipAssignment) {
            throw new common_1.HttpException("ClassMembershipAssignment not found", 404);
        }
        const notification = this.notificationRepository.create(Object.assign(Object.assign({}, createNotificationDto), { sender,
            receiver, createdAt: new Date() }));
        return this.notificationRepository.save(notification);
    }
    findClassMembershipAssignment(classMembershipAssignmentId) {
        return this.classMembershipAssignmentRepository.findOne({
            where: { id: +classMembershipAssignmentId },
        });
    }
};
exports.ClassesService = ClassesService;
exports.ClassesService = ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(class_entity_1.Class)),
    __param(3, (0, typeorm_1.InjectRepository)(class_membership_entity_1.ClassMembership)),
    __param(4, (0, typeorm_1.InjectRepository)(assignment_entity_1.Assignment)),
    __param(5, (0, typeorm_1.InjectRepository)(class_membership_assignment_entity_1.ClassMembershipAssignment)),
    __param(6, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        mail_service_1.MailService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ClassesService);
//# sourceMappingURL=classes.service.js.map