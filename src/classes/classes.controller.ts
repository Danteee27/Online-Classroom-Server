import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  SerializeOptions,
  Put,
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
import {
  UpdateAssignmentDto,
  UpdateClassMembershipAssignmentDto,
} from "./dto/update-class.dto";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";

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
  @Put(":id/assignments/:assignmentId")
  @HttpCode(HttpStatus.OK)
  updateAssigment(
    @Param("id") id: string,
    @Param("assignmentId") assignmentId: string,
    @Body() updateAssignmentDto: UpdateAssignmentDto
  ): Promise<Assignment> {
    return this.classesService.updateAssignment(
      +id,
      +assignmentId,
      updateAssignmentDto
    );
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Put(":classId/classMemberships/:classMembershipId/assignment/:assignmentId")
  @HttpCode(HttpStatus.OK)
  updateClassMembershipAssignment(
    @Param("classId") classId: string,
    @Param("assignmentId") assignmentId: string,
    @Param("classMembershipId") classMembershipId: string,

    @Body()
    updateClassMembershipAssignmentDto: UpdateClassMembershipAssignmentDto
  ): Promise<ClassMembershipAssignment> {
    return this.classesService.updateClassMembershipAssignment(
      +classId,
      +assignmentId,
      +classMembershipId,
      updateClassMembershipAssignmentDto
    );
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
