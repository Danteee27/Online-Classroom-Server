"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_entity_1 = require("./entities/class.entity");
const class_membership_entity_1 = require("./entities/class-membership.entity");
const classes_controller_1 = require("./classes.controller");
const is_exists_validator_1 = require("../utils/validators/is-exists.validator");
const is_not_exists_validator_1 = require("../utils/validators/is-not-exists.validator");
const classes_service_1 = require("./classes.service");
const users_module_1 = require("../users/users.module");
const mail_module_1 = require("../mail/mail.module");
const assignment_entity_1 = require("./entities/assignment.entity");
const class_membership_assignment_entity_1 = require("./entities/class-membership-assignment.entity");
let ClassesModule = class ClassesModule {
};
exports.ClassesModule = ClassesModule;
exports.ClassesModule = ClassesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                class_entity_1.Class,
                class_membership_entity_1.ClassMembership,
                assignment_entity_1.Assignment,
                class_membership_assignment_entity_1.ClassMembershipAssignment,
            ]),
            users_module_1.UsersModule,
            mail_module_1.MailModule,
        ],
        controllers: [classes_controller_1.ClassesController],
        providers: [is_exists_validator_1.IsExist, is_not_exists_validator_1.IsNotExist, classes_service_1.ClassesService],
        exports: [classes_service_1.ClassesService],
    })
], ClassesModule);
//# sourceMappingURL=classes.module.js.map