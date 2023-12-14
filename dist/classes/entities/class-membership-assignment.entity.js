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
exports.ClassMembershipAssignment = void 0;
const typeorm_1 = require("typeorm");
const assignment_entity_1 = require("./assignment.entity");
const class_membership_entity_1 = require("./class-membership.entity");
let ClassMembershipAssignment = class ClassMembershipAssignment {
};
exports.ClassMembershipAssignment = ClassMembershipAssignment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignment_entity_1.Assignment, (assignment) => assignment.classMembershipAssignments, { eager: true }),
    __metadata("design:type", assignment_entity_1.Assignment)
], ClassMembershipAssignment.prototype, "assignment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_membership_entity_1.ClassMembership, (classMembership) => classMembership.classMembershipAssignments),
    __metadata("design:type", class_membership_entity_1.ClassMembership)
], ClassMembershipAssignment.prototype, "classMembership", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "currentGrade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number, nullable: true }),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "studentReview", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ClassMembershipAssignment.prototype, "teacherComment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ClassMembershipAssignment.prototype, "isFinalised", void 0);
exports.ClassMembershipAssignment = ClassMembershipAssignment = __decorate([
    (0, typeorm_1.Entity)()
], ClassMembershipAssignment);
//# sourceMappingURL=class-membership-assignment.entity.js.map