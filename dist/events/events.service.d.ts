import { EventsGateway } from "./events.gateway";
export declare class EventsService {
    private readonly eventsGateway;
    constructor(eventsGateway: EventsGateway);
    sendMessage(message: string): void;
}
