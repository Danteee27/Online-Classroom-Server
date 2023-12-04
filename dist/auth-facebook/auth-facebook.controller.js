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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFacebookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../auth/auth.service");
const auth_facebook_service_1 = require("./auth-facebook.service");
const auth_facebook_login_dto_1 = require("./dto/auth-facebook-login.dto");
let AuthFacebookController = class AuthFacebookController {
    constructor(authService, authFacebookService) {
        this.authService = authService;
        this.authFacebookService = authFacebookService;
    }
    async login(loginDto) {
        const socialData = await this.authFacebookService.getProfileByToken(loginDto);
        return this.authService.validateSocialLogin('facebook', socialData);
    }
};
exports.AuthFacebookController = AuthFacebookController;
__decorate([
    (0, common_1.SerializeOptions)({
        groups: ['me'],
    }),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_facebook_login_dto_1.AuthFacebookLoginDto]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AuthFacebookController.prototype, "login", null);
exports.AuthFacebookController = AuthFacebookController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)({
        path: 'auth/facebook',
        version: '1',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        auth_facebook_service_1.AuthFacebookService])
], AuthFacebookController);
//# sourceMappingURL=auth-facebook.controller.js.map