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
import {
  AddClassMembershipDto,
  CreateAssignmentDto,
  CreateClassDto,
  InviteClassMembershipDto,
} from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { Assignment } from "./entities/assignment.entity";

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
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<NullableType<Class[]>> {
    return this.classesService.findAll();
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post(":id/assignments")
  @HttpCode(HttpStatus.CREATED)
  createAssigment(
    @Param("id") id: string,
    @Body() createAssignmentDto: CreateAssignmentDto
  ): Promise<Assignment> {
    return this.classesService.createAssignment(+id, createAssignmentDto);
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post(":id/classMemberships")
  @HttpCode(HttpStatus.CREATED)
  addClassMember(
    @Param("id") id: string,
    @Body() createClassMemberDto: AddClassMembershipDto
  ): Promise<Class> {
    return this.classesService.addClassMembership(+id, createClassMemberDto);
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post("inviteClassMembership")
  @HttpCode(HttpStatus.OK)
  inviteClassMember(
    @Body() inviteClassMembershipDto: InviteClassMembershipDto
  ): Promise<Class> {
    return this.classesService.inviteClassmembership(inviteClassMembershipDto);
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
