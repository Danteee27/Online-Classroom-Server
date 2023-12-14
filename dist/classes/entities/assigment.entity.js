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
exports.Assigment = void 0;
const typeorm_1 = require("typeorm");
const class_entity_1 = require("./class.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const class_membership_assignment_entity_1 = require("./class-membership-assignment.entity");
let Assigment = class Assigment {
};
exports.Assigment = Assigment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Assigment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_entity_1.Class, (classEntity) => classEntity.assigments, {
        eager: true,
    }),
    __metadata("design:type", class_entity_1.Class)
], Assigment.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.assigments, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Assigment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number }),
    __metadata("design:type", Number)
], Assigment.prototype, "maxGrade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assigment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_membership_assignment_entity_1.ClassMembershipAssignment, (classMembershipAssignment) => classMembershipAssignment.assignment),
    __metadata("design:type", Array)
], Assigment.prototype, "classMembershipAssignments", void 0);
exports.Assigment = Assigment = __decorate([
    (0, typeorm_1.Entity)()
], Assigment);
//# sourceMappingURL=assigment.entity.js.map