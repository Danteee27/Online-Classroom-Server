import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { I18nContext } from "nestjs-i18n";
import { MailData } from "./interfaces/mail-data.interface";
import { AllConfigType } from "src/config/config.type";
import { MaybeType } from "../utils/types/maybe.type";
import { MailerService } from "src/mailer/mailer.service";
import path from "path";
import { ClassMembershipRole } from "src/classes/enums/class-membership-role.enum";

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>
  ) {}

  async userSignUp(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let emailConfirmTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [emailConfirmTitle, text1, text2, text3] = await Promise.all([
        i18n.t("common.confirmEmail"),
        i18n.t("confirm-email.text1"),
        i18n.t("confirm-email.text2"),
        i18n.t("confirm-email.text3"),
      ]);
    }

    const url = new URL(
      "https://online-classroom-navy.vercel.app/verificationConfirm"
    );
    url.searchParams.set("hash", mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      text: `${url.toString()} ${emailConfirmTitle}`,
      templatePath: path.join(
        this.configService.getOrThrow("app.workingDirectory", {
          infer: true,
        }),
        "src",
        "mail",
        "mail-templates",
        "activation.hbs"
      ),
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

  async forgotPassword(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let resetPasswordTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;
    let text4: MaybeType<string>;

    if (i18n) {
      [resetPasswordTitle, text1, text2, text3, text4] = await Promise.all([
        i18n.t("common.resetPassword"),
        i18n.t("reset-password.text1"),
        i18n.t("reset-password.text2"),
        i18n.t("reset-password.text3"),
        i18n.t("reset-password.text4"),
      ]);
    }

    const url = new URL(
      "https://online-classroom-navy.vercel.app/resetpassword"
    );
    url.searchParams.set("hash", mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: resetPasswordTitle,
      text: `${url.toString()} ${resetPasswordTitle}`,
      templatePath: path.join(
        this.configService.getOrThrow("app.workingDirectory", {
          infer: true,
        }),
        "src",
        "mail",
        "mail-templates",
        "reset-password.hbs"
      ),
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

  async classInvitation(
    mailData: MailData<{
      userId: number;
      role: ClassMembershipRole;
      inviter: string;
      className: string;
      inviterId: number;
    }>
  ): Promise<void> {
    const i18n = I18nContext.current();
    let classInvitationTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;
    let text4: MaybeType<string>;

    if (mailData.data.role === ClassMembershipRole.TEACHER) {
      classInvitationTitle = await i18n?.t("common.classInvitationTeacher");
    } else {
      classInvitationTitle = await i18n?.t("common.classInvitationStudent");
    }

    if (i18n) {
      [text1, text2, text3, text4] = await Promise.all([
        i18n.t("class-invitation.text1"),
        i18n.t("class-invitation.text2"),
        i18n.t("class-invitation.text3"),
        i18n.t("class-invitation.text4"),
      ]);
    }

    const url = new URL(
      "https://online-classroom-navy.vercel.app/classinvitation"
    );
    url.searchParams.set("userId", mailData.data.userId.toString());
    url.searchParams.set("role", mailData.data.role.toString());
    url.searchParams.set("inviterId", mailData.data.inviterId.toString());

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: classInvitationTitle,
      text: `${url.toString()} ${classInvitationTitle}`,
      templatePath: path.join(
        this.configService.getOrThrow("app.workingDirectory", {
          infer: true,
        }),
        "src",
        "mail",
        "mail-templates",
        "reset-password.hbs"
      ),
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
}
