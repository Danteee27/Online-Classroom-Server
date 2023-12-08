import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class QueryClassDto {
  @ApiProperty()
  @IsString()
  classCode: string;
}
