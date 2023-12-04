import { ConfigService } from '@nestjs/config';
import { OrNeverType } from '../../utils/types/or-never.type';
import { AllConfigType } from 'src/config/config.type';
import { JwtPayloadType } from './types/jwt-payload.type';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService<AllConfigType>);
    validate(payload: JwtPayloadType): OrNeverType<JwtPayloadType>;
}
export {};
