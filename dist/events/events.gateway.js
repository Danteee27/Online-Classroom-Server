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
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const classes_service_1 = require("../classes/classes.service");
const create_class_dto_1 = require("../classes/dto/create-class.dto");
let EventsGateway = class EventsGateway {
    constructor(classesService) {
        this.classesService = classesService;
    }
    onModuleInit() {
        this.server.on("connection", (socket) => {
            console.log("connected", socket.id);
        });
    }
    async onStudentRequest(notification) {
        const { senderId, receiverId, classMembershipAssignmentId, title, description, } = notification;
        console.log("notification", notification);
        const sentNotification = await this.classesService.createNotification({
            senderId,
            receiverId,
            classMembershipAssignmentId,
            title,
            description,
        });
        this.server.emit(receiverId, "hi");
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("clientNotification"),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.CreateNotificationDto]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "onStudentRequest", null);
exports.EventsGateway = EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: true,
    }),
    __metadata("design:paramtypes", [classes_service_1.ClassesService])
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map