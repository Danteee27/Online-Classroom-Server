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
exports.Notification = void 0;
const typeorm_1 = require("typeorm");
const class_membership_entity_1 = require("./class-membership.entity");
const class_membership_assignment_entity_1 = require("./class-membership-assignment.entity");
let Notification = class Notification {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], Notification.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_membership_entity_1.ClassMembership, (user) => user.sentNotifications, {
        eager: true,
    }),
    __metadata("design:type", class_membership_entity_1.ClassMembership)
], Notification.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_membership_entity_1.ClassMembership, (user) => user.receivedNotifications, {
        eager: true,
    }),
    __metadata("design:type", class_membership_entity_1.ClassMembership)
], Notification.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_membership_assignment_entity_1.ClassMembershipAssignment, (assignment) => assignment.notifications, {
        eager: true,
    }),
    __metadata("design:type", class_membership_assignment_entity_1.ClassMembershipAssignment)
], Notification.prototype, "classMembershipAssignment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date }),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "deleted", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)()
], Notification);
//# sourceMappingURL=notification.entity.js.map