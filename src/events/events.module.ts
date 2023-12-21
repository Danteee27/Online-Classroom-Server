import { Module } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";
import { ClassesModule } from "src/classes/classes.module";

@Module({
  imports: [ClassesModule],
  providers: [EventsGateway],
})
export class EventsModule {}
