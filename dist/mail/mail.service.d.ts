import { ConfigService } from "@nestjs/config";
import { MailData } from "./interfaces/mail-data.interface";
import { AllConfigType } from "src/config/config.type";
import { MailerService } from "src/mailer/mailer.service";
import { ClassMembershipRole } from "src/classes/enums/class-membership-role.enum";
export declare class MailService {
    private readonly mailerService;
    private readonly configService;
    constructor(mailerService: MailerService, configService: ConfigService<AllConfigType>);
    userSignUp(mailData: MailData<{
        hash: string;
    }>): Promise<void>;
    forgotPassword(mailData: MailData<{
        hash: string;
    }>): Promise<void>;
    classInvitation(mailData: MailData<{
        userId: number;
        role: ClassMembershipRole;
        inviter: string;
        className: string;
        inviterId: number;
        classId: number;
    }>): Promise<void>;
}
