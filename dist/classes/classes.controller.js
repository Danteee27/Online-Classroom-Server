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
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const classes_service_1 = require("./classes.service");
const create_class_dto_1 = require("./dto/create-class.dto");
const update_class_dto_1 = require("./dto/update-class.dto");
let ClassesController = class ClassesController {
    constructor(classesService) {
        this.classesService = classesService;
    }
    create(createClassDto) {
        return this.classesService.createClass(createClassDto);
    }
    findAll() {
        return this.classesService.findAll();
    }
    update(classId, updateClassDto) {
        return this.classesService.updateClass(+classId, updateClassDto);
    }
    createAssignment(id, createAssignmentDto) {
        return this.classesService.createAssignment(+id, createAssignmentDto);
    }
    findUserNotifications(userId) {
        return this.classesService.getNotifciations(+userId);
    }
    updateAssignment(id, assignmentId, updateAssignmentDto) {
        return this.classesService.updateAssignment(+id, +assignmentId, updateAssignmentDto);
    }
    getAllClassMembershipAssignments(classId, assignmentId) {
        return this.classesService.findAllClassMembershipAssignment(+classId, +assignmentId);
    }
    getClassMembershipAssignment(classId, assignmentId, classMembershipId) {
        return this.classesService.findClassMembershipAssignment(+classId, +assignmentId, +classMembershipId);
    }
    updateClassMembershipAssignment(classId, assignmentId, classMembershipId, updateClassMembershipAssignmentDto) {
        return this.classesService.updateClassMembershipAssignment(+classId, +assignmentId, +classMembershipId, updateClassMembershipAssignmentDto);
    }
    mapUserToClassMembership(mapUserToClassMembershipDto) {
        return this.classesService.mapUserToClassMembership(mapUserToClassMembershipDto);
    }
    addClassMembershipAssignment(classId, assignmentId, classMembershipId) {
        return this.classesService.createClassMembershipAssignment(+classId, {
            assignmentId,
            classMembershipId,
        });
    }
    createClassMembership(id, createClassMembershipDto) {
        return this.classesService.createClassMembership(+id, createClassMembershipDto);
    }
    updateClassMembership(id, classMembershipId, updateClassMembershipDto) {
        return this.classesService.updateClassMembership(+id, +classMembershipId, updateClassMembershipDto);
    }
    inviteClassMember(inviteClassMembershipDto) {
        return this.classesService.inviteClassmembership(inviteClassMembershipDto);
    }
    findByClassCode(classCode) {
        return this.classesService.findOne({ classCode: classCode });
    }
    findOne(id) {
        return this.classesService.findOne({ id: +id });
    }
};
exports.ClassesController = ClassesController;
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "create", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "findAll", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Put)(":classId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("classId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_class_dto_1.UpdateClassDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "update", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)(":id/assignments"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_class_dto_1.CreateAssignmentDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "createAssignment", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)("user/:userId/notifications"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassesController.prototype, "findUserNotifications", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Put)(":id/assignments/:assignmentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("assignmentId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_class_dto_1.UpdateAssignmentDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "updateAssignment", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)(":classId/assignments/:assignmentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("classId")),
    __param(1, (0, common_1.Param)("assignmentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getAllClassMembershipAssignments", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)(":classId/classMemberships/:classMembershipId/assignment/:assignmentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("classId")),
    __param(1, (0, common_1.Param)("assignmentId")),
    __param(2, (0, common_1.Param)("classMembershipId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getClassMembershipAssignment", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Put)(":classId/classMemberships/:classMembershipId/assignment/:assignmentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("classId")),
    __param(1, (0, common_1.Param)("assignmentId")),
    __param(2, (0, common_1.Param)("classMembershipId")),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, update_class_dto_1.UpdateClassMembershipAssignmentDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "updateClassMembershipAssignment", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)("/mapUserToClassMembership"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.MapUserToClassMembershipDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "mapUserToClassMembership", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)(":classId/classMemberships/:classMembershipId/assignment/:assignmentId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)("classId")),
    __param(1, (0, common_1.Param)("assignmentId")),
    __param(2, (0, common_1.Param)("classMembershipId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "addClassMembershipAssignment", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)(":id/classMemberships"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_class_dto_1.CreateClassMembershipDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "createClassMembership", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Put)(":id/classMemberships/:classMembershipId"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("classMembershipId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_class_dto_1.UpdateClassMembershipDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "updateClassMembership", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Post)("inviteClassMembership"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.InviteClassMembershipDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "inviteClassMember", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)("byClasscode/:classCode"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("classCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "findByClassCode", null);
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ["admin", "user"],
    }),
    (0, common_1.Get)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "findOne", null);
exports.ClassesController = ClassesController = __decorate([
    (0, swagger_1.ApiTags)("Classes"),
    (0, common_1.Controller)({
        path: "classes",
        version: "1",
    }),
    __metadata("design:paramtypes", [classes_service_1.ClassesService])
], ClassesController);
//# sourceMappingURL=classes.controller.js.map