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
  CreateAssignmentDto,
  CreateClassDto,
  CreateClassMembershipDto,
  InviteClassMembershipDto,
  MapUserToClassMembershipDto,
} from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { Assignment } from "./entities/assignment.entity";
import {
  UpdateAssignmentDto,
  UpdateClassMembershipAssignmentDto,
  UpdateClassMembershipDto,
} from "./dto/update-class.dto";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";
import { ClassMembership } from "./entities/class-membership.entity";

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
    return this.classesService.createClass(createClassDto);
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
  createAssignment(
    @Param("id") id: string,
    @Body() createAssignmentDto: CreateAssignmentDto
  ): Promise<Assignment> {
    return this.classesService.createAssignment(+id, createAssignmentDto);
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Get("user/:userId/notifications")
  @HttpCode(HttpStatus.OK)
  findUserNotifications(@Param("userId") userId: string) {
    return this.classesService.getNotifciations(+userId);
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Put(":id/assignments/:assignmentId")
  @HttpCode(HttpStatus.OK)
  updateAssignment(
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
  @Get(":classId/assignments/:assignmentId")
  @HttpCode(HttpStatus.OK)
  getAllClassMembershipAssignments(
    @Param("classId") classId: string,
    @Param("assignmentId") assignmentId: string
  ): Promise<ClassMembershipAssignment[]> {
    return this.classesService.findAllClassMembershipAssignment(
      +classId,
      +assignmentId
    );
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Get(":classId/classMemberships/:classMembershipId/assignment/:assignmentId")
  @HttpCode(HttpStatus.OK)
  getClassMembershipAssignment(
    @Param("classId") classId: string,
    @Param("assignmentId") assignmentId: string,
    @Param("classMembershipId") classMembershipId: string
  ): Promise<ClassMembershipAssignment | null> {
    return this.classesService.findClassMembershipAssignment(
      +classId,
      +assignmentId,
      +classMembershipId
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
  @Post("/mapUserToClassMembership")
  @HttpCode(HttpStatus.CREATED)
  mapUserToClassMembership(
    @Body() mapUserToClassMembershipDto: MapUserToClassMembershipDto
  ): Promise<ClassMembership[]> {
    return this.classesService.mapUserToClassMembership(
      mapUserToClassMembershipDto
    );
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post(":classId/classMemberships/:classMembershipId/assignment/:assignmentId")
  @HttpCode(HttpStatus.CREATED)
  addClassMembershipAssignment(
    @Param("classId") classId: string,
    @Param("assignmentId") assignmentId: string,
    @Param("classMembershipId") classMembershipId: string
  ): Promise<ClassMembershipAssignment> {
    return this.classesService.createClassMembershipAssignment(+classId, {
      assignmentId,
      classMembershipId,
    });
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Post(":id/classMemberships")
  @HttpCode(HttpStatus.CREATED)
  createClassMembership(
    @Param("id") id: string,
    @Body() createClassMembershipDto: CreateClassMembershipDto
  ): Promise<ClassMembership> {
    return this.classesService.createClassMembership(
      +id,
      createClassMembershipDto
    );
  }

  @SerializeOptions({
    groups: ["admin", "user"],
  })
  @Put(":id/classMemberships/:classMembershipId")
  @HttpCode(HttpStatus.OK)
  updateClassMembership(
    @Param("id") id: string,
    @Param("classMembershipId") classMembershipId: string,
    @Body() updateClassMembershipDto: UpdateClassMembershipDto
  ): Promise<ClassMembership> {
    return this.classesService.updateClassMembership(
      +id,
      +classMembershipId,
      updateClassMembershipDto
    );
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
  @Get("byClasscode/:classCode")
  @HttpCode(HttpStatus.OK)
  findByClassCode(
    @Param("classCode") classCode: string
  ): Promise<NullableType<Class>> {
    return this.classesService.findOne({ classCode: classCode });
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
