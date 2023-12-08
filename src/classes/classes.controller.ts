import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  SerializeOptions,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/roles/roles.decorator";
import { RoleEnum } from "src/roles/roles.enum";
import { RolesGuard } from "src/roles/roles.guard";
import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { NullableType } from "src/utils/types/nullable.type";

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
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("id") id: string): Promise<NullableType<Class>> {
    return this.classesService.findOne({ id: +id });
  }
}
