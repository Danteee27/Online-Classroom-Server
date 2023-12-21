import { WebSocketGateway } from "@nestjs/websockets";
import { EventsGateway } from "./events.gateway";

@WebSocketGateway()
export class EventsService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  sendMessage(message: string) {
    // this.eventsGateway.server.emit("message", { text: message });
  }
}
