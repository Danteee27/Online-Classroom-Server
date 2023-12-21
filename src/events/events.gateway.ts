import { OnModuleInit } from "@nestjs/common";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { ClassesService } from "src/classes/classes.service";
import { CreateNotificationDto } from "src/classes/dto/create-class.dto";

@WebSocketGateway({
  cors: true,
})
export class EventsGateway implements OnModuleInit {
  constructor(private classesService: ClassesService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log("connected", socket.id);
    });
  }

  @SubscribeMessage("studentRequestReview")
  async onStudentRequest(@MessageBody() notification: CreateNotificationDto) {
    const {
      senderId,
      receiverId,
      classMembershipAssignmentId,
      title,
      description,
    } = notification;

    const sentNotification = await this.classesService.createNotification({
      senderId,
      receiverId,
      classMembershipAssignmentId,
      title,
      description,
    });

    this.server.emit(receiverId, sentNotification);
  }
}
