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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(createProfileDto) {
        return this.usersRepository.save(this.usersRepository.create(createProfileDto));
    }
    findManyWithPagination({ filterOptions, sortOptions, paginationOptions, }) {
        var _a;
        const where = {};
        if ((_a = filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.roles) === null || _a === void 0 ? void 0 : _a.length) {
            where.role = filterOptions.roles.map((role) => ({
                id: role.id,
            }));
        }
        return this.usersRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
            where: where,
            order: sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.reduce((accumulator, sort) => (Object.assign(Object.assign({}, accumulator), { [sort.orderBy]: sort.order })), {}),
        });
    }
    findOne(fields) {
        return this.usersRepository.findOne({
            where: fields,
            relations: [
                "role",
                "classMemberships",
                "assignments",
                "classMemberships.classMembershipAssignments",
                "classMemberships.classMembershipAssignments.assignment.creator",
            ],
        });
    }
    update(id, payload) {
        return this.usersRepository.save(this.usersRepository.create(Object.assign({ id }, payload)));
    }
    async softDelete(id) {
        await this.usersRepository.softDelete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map