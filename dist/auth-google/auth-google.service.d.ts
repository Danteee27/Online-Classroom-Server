import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthGoogleLoginDto } from './dto/auth-google-login.dto';
export declare class AuthGoogleService {
    constructor();
    getProfileByToken(loginDto: AuthGoogleLoginDto): Promise<SocialInterface>;
}
