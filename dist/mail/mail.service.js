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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_i18n_1 = require("nestjs-i18n");
const mailer_service_1 = require("../mailer/mailer.service");
const path_1 = __importDefault(require("path"));
const class_membership_role_enum_1 = require("../classes/enums/class-membership-role.enum");
let MailService = class MailService {
    constructor(mailerService, configService) {
        this.mailerService = mailerService;
        this.configService = configService;
    }
    async userSignUp(mailData) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        let emailConfirmTitle;
        let text1;
        let text2;
        let text3;
        if (i18n) {
            [emailConfirmTitle, text1, text2, text3] = await Promise.all([
                i18n.t("common.confirmEmail"),
                i18n.t("confirm-email.text1"),
                i18n.t("confirm-email.text2"),
                i18n.t("confirm-email.text3"),
            ]);
        }
        const url = new URL("https://online-classroom-navy.vercel.app/verificationConfirm");
        url.searchParams.set("hash", mailData.data.hash);
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: emailConfirmTitle,
            text: `${url.toString()} ${emailConfirmTitle}`,
            templatePath: path_1.default.join(this.configService.getOrThrow("app.workingDirectory", {
                infer: true,
            }), "src", "mail", "mail-templates", "activation.hbs"),
            context: {
                title: emailConfirmTitle,
                url: url.toString(),
                actionTitle: emailConfirmTitle,
                app_name: this.configService.get("app.name", { infer: true }),
                text1,
                text2,
                text3,
            },
        });
    }
    async forgotPassword(mailData) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        let resetPasswordTitle;
        let text1;
        let text2;
        let text3;
        let text4;
        if (i18n) {
            [resetPasswordTitle, text1, text2, text3, text4] = await Promise.all([
                i18n.t("common.resetPassword"),
                i18n.t("reset-password.text1"),
                i18n.t("reset-password.text2"),
                i18n.t("reset-password.text3"),
                i18n.t("reset-password.text4"),
            ]);
        }
        const url = new URL("https://online-classroom-navy.vercel.app/resetpassword");
        url.searchParams.set("hash", mailData.data.hash);
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: resetPasswordTitle,
            text: `${url.toString()} ${resetPasswordTitle}`,
            templatePath: path_1.default.join(this.configService.getOrThrow("app.workingDirectory", {
                infer: true,
            }), "src", "mail", "mail-templates", "reset-password.hbs"),
            context: {
                title: resetPasswordTitle,
                url: url.toString(),
                actionTitle: resetPasswordTitle,
                app_name: this.configService.get("app.name", {
                    infer: true,
                }),
                text1,
                text2,
                text3,
                text4,
            },
        });
    }
    async classInvitation(mailData) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        let classInvitationTitle;
        let text1;
        let text2;
        let text3;
        let text4;
        if (mailData.data.role === class_membership_role_enum_1.ClassMembershipRole.TEACHER) {
            classInvitationTitle = await (i18n === null || i18n === void 0 ? void 0 : i18n.t("common.classInvitationTeacher"));
        }
        else {
            classInvitationTitle = await (i18n === null || i18n === void 0 ? void 0 : i18n.t("common.classInvitationStudent"));
        }
        if (i18n) {
            [text1, text2, text3, text4] = await Promise.all([
                i18n.t("class-invitation.text1"),
                i18n.t("class-invitation.text2"),
                i18n.t("class-invitation.text3"),
                i18n.t("class-invitation.text4"),
            ]);
        }
        const url = new URL("https://online-classroom-navy.vercel.app/classinvitation");
        url.searchParams.set("userId", mailData.data.userId.toString());
        url.searchParams.set("role", mailData.data.role.toString());
        url.searchParams.set("inviterId", mailData.data.inviterId.toString());
        url.searchParams.set("classId", mailData.data.classId.toString());
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: classInvitationTitle,
            text: `${url.toString()} ${classInvitationTitle}`,
            templatePath: path_1.default.join(this.configService.getOrThrow("app.workingDirectory", {
                infer: true,
            }), "src", "mail", "mail-templates", "reset-password.hbs"),
            context: {
                title: classInvitationTitle,
                url: url.toString(),
                actionTitle: classInvitationTitle,
                app_name: this.configService.get("app.name", {
                    infer: true,
                }),
                text1,
                text2,
                text3,
                text4,
            },
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_service_1.MailerService,
        config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map