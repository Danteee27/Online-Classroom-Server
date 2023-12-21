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
    this.server.emit("onMessage", {
      msg: "Client Message",
      content: "hello",
    });
  }

  @SubscribeMessage("message")
  onNewMessage(@MessageBody() body: any) {
    this.server.emit("onMessage", {
      msg: "New Message",
      content: body,
    });
  }

  @SubscribeMessage("clientMessage")
  onNewClientMessage(@MessageBody() body: any) {
    this.server.emit("onMessage", {
      msg: "Client Message",
      content: body,
    });
  }

  @SubscribeMessage("teacherFinalise")
  onTeacherFinalise(@MessageBody() body: any) {
    this.server.emit("onMessage", {
      msg: "Client Message",
      content: body,
    });
  }

  @SubscribeMessage("teacherReplyReview")
  onTeacherReplyReview(@MessageBody() body: any) {
    this.server.emit("onMessage", {
      msg: "Client Message",
      content: body,
    });
  }

  @SubscribeMessage("studentRequestReview")
  onStudentRequest(@MessageBody() notification: CreateNotificationDto) {
    // const classMembershipAssignment =
    //   this.classesService.findClassMembershipAssignment("13");

    const title = "Student Request Review";
    console.log(notification);
    // this.classesService.createNotification(notification);

    this.server.emit("onMessage", notification);
  }

  @SubscribeMessage("studentReplyReview")
  onStudentReplyReview(@MessageBody() body: any) {
    this.server.emit("onMessage", {
      msg: "Client Message",
      content: body,
    });
  }
}
