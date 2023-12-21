import { OnModuleInit } from "@nestjs/common";
import { Server } from "socket.io";
import { ClassesService } from "src/classes/classes.service";
import { CreateNotificationDto } from "src/classes/dto/create-class.dto";
export declare class EventsGateway implements OnModuleInit {
    private classesService;
    constructor(classesService: ClassesService);
    server: Server;
    onModuleInit(): void;
    onStudentRequest(notification: CreateNotificationDto): Promise<void>;
}
