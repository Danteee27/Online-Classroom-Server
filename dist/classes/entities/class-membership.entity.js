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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassMembership = void 0;
const typeorm_1 = require("typeorm");
const class_membership_role_enum_1 = require("../enums/class-membership-role.enum");
const user_entity_1 = require("../../users/entities/user.entity");
const class_entity_1 = require("./class.entity");
const class_membership_assignment_entity_1 = require("./class-membership-assignment.entity");
const notification_entity_1 = require("./notification.entity");
const assignment_entity_1 = require("./assignment.entity");
let ClassMembership = class ClassMembership {
};
exports.ClassMembership = ClassMembership;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], ClassMembership.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.classMemberships, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.User)
], ClassMembership.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_entity_1.Class, (classEntity) => classEntity.classMemberships, {
        eager: true,
    }),
    __metadata("design:type", class_entity_1.Class)
], ClassMembership.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", String)
], ClassMembership.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: class_membership_role_enum_1.ClassMembershipRole,
        default: class_membership_role_enum_1.ClassMembershipRole.STUDENT,
    }),
    __metadata("design:type", String)
], ClassMembership.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_membership_assignment_entity_1.ClassMembershipAssignment, (classMembershipAssignment) => classMembershipAssignment.classMembership),
    __metadata("design:type", Array)
], ClassMembership.prototype, "classMembershipAssignments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, (notification) => notification.sender),
    __metadata("design:type", Array)
], ClassMembership.prototype, "sentNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, (notification) => notification.receiver),
    __metadata("design:type", Array)
], ClassMembership.prototype, "receivedNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignment_entity_1.Assignment, (assignment) => assignment.creator),
    __metadata("design:type", Array)
], ClassMembership.prototype, "assignments", void 0);
exports.ClassMembership = ClassMembership = __decorate([
    (0, typeorm_1.Entity)()
], ClassMembership);
//# sourceMappingURL=class-membership.entity.js.map