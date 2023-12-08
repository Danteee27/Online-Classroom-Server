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
exports.CreateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lower_case_transformer_1 = require("../../utils/transformers/lower-case.transformer");
const is_not_exists_validator_1 = require("../../utils/validators/is-not-exists.validator");
class CreateClassDto {
}
exports.CreateClassDto = CreateClassDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Math 101" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClassDto.prototype, "className", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "MATH101" }),
    (0, class_transformer_1.Transform)(lower_case_transformer_1.lowerCaseTransformer),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(is_not_exists_validator_1.IsNotExist, ["Class"], { message: "classCodeAlreadyExists" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClassDto.prototype, "classCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: "This is a math class" }),
    __metadata("design:type", Object)
], CreateClassDto.prototype, "description", void 0);
//# sourceMappingURL=create-class.dto.js.map