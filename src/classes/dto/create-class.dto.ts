import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, Validate } from "class-validator";
import { lowerCaseTransformer } from "src/utils/transformers/lower-case.transformer";
import { IsNotExist } from "src/utils/validators/is-not-exists.validator";
import { ClassMembershipRole } from "../enums/class-membership-role.enum";

export class CreateClassDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: "Math 101" })
  @IsNotEmpty()
  @IsString()
  className: string;

  @ApiPropertyOptional({ example: "This is a math class" })
  description: string | null;
}

export class AddClassMembershipDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsEnum(ClassMembershipRole)
  role: ClassMembershipRole;
}

export class InviteClassMembershipDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  inviterId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  classId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsEnum(ClassMembershipRole)
  role: ClassMembershipRole;
}

export class CreateAssignmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  creatorId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  maxGrade: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dueDate: Date;
}
