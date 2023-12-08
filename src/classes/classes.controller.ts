import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  SerializeOptions,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NullableType } from "src/utils/types/nullable.type";
import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";

// @ApiBearerAuth()
// @Roles(RoleEnum.user, RoleEnum.admin)
// @UseGuards(AuthGuard("jwt"), RolesGuard)
@ApiTags("Classes")
@Controller({
  path: "classes",
  version: "1",
})
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}
  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classesService.create(createClassDto);
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Get(":classCode")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("classCode") classCode: string): Promise<NullableType<Class>> {
    return this.classesService.findOne({ classCode });
  }
}
