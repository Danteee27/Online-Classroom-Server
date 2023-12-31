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
exports.Class = void 0;
const entity_helper_1 = require("../../utils/entity-helper");
const typeorm_1 = require("typeorm");
const class_membership_entity_1 = require("./class-membership.entity");
const assignment_entity_1 = require("./assignment.entity");
let Class = class Class extends entity_helper_1.EntityHelper {
};
exports.Class = Class;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Class.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], Class.prototype, "className", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, unique: true, generated: "uuid" }),
    __metadata("design:type", String)
], Class.prototype, "classCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", String)
], Class.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_membership_entity_1.ClassMembership, (classMembership) => classMembership.class),
    __metadata("design:type", Array)
], Class.prototype, "classMemberships", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignment_entity_1.Assignment, (Assignment) => Assignment.class),
    __metadata("design:type", Array)
], Class.prototype, "assignments", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, default: new Date() }),
    __metadata("design:type", Date)
], Class.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Class.prototype, "active", void 0);
exports.Class = Class = __decorate([
    (0, typeorm_1.Entity)()
], Class);
//# sourceMappingURL=class.entity.js.map