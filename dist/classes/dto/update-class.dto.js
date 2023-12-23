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
exports.UpdateClassMembershipDto = exports.UpdateClassMembershipAssignmentDto = exports.UpdateAssignmentDto = exports.UpdateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_membership_role_enum_1 = require("../enums/class-membership-role.enum");
class UpdateClassDto {
}
exports.UpdateClassDto = UpdateClassDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Math 101" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "className", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "This is a math class" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateClassDto.prototype, "active", void 0);
class UpdateAssignmentDto {
}
exports.UpdateAssignmentDto = UpdateAssignmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 90 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAssignmentDto.prototype, "maxGrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Math Assignment" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAssignmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Math Assignment" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAssignmentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: new Date() }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateAssignmentDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateAssignmentDto.prototype, "deleted", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAssignmentDto.prototype, "order", void 0);
class UpdateClassMembershipAssignmentDto {
}
exports.UpdateClassMembershipAssignmentDto = UpdateClassMembershipAssignmentDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 90 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateClassMembershipAssignmentDto.prototype, "currentGrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Excellent performance" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipAssignmentDto.prototype, "studentExplanation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 80 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateClassMembershipAssignmentDto.prototype, "expectedGrade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 90 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateClassMembershipAssignmentDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Excellent performance" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipAssignmentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "You are wrong!" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipAssignmentDto.prototype, "teacherComment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Why I am so bad???" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipAssignmentDto.prototype, "studentComment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Great work! I will fix the point" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipAssignmentDto.prototype, "teacherFinalisedComment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateClassMembershipAssignmentDto.prototype, "isFinalised", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateClassMembershipAssignmentDto.prototype, "isRequested", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateClassMembershipAssignmentDto.prototype, "isReviewed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateClassMembershipAssignmentDto.prototype, "isSubmitted", void 0);
class UpdateClassMembershipDto {
}
exports.UpdateClassMembershipDto = UpdateClassMembershipDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "1" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "Duc Anh" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateClassMembershipDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "TEACHER" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateClassMembershipDto.prototype, "role", void 0);
//# sourceMappingURL=update-class.dto.js.map