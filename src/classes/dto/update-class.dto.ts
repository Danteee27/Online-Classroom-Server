import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsString } from "class-validator";
import { ClassMembershipRole } from "../enums/class-membership-role.enum";

export class UpdateClassDto {
  @ApiPropertyOptional({ example: "Math 101" })
  @IsOptional()
  @IsString()
  className?: string;

  @ApiPropertyOptional({ example: "This is a math class" })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  active?: boolean;
}
export class UpdateAssignmentDto {
  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  maxGrade?: number;

  @ApiPropertyOptional({ example: "Math Assignment" })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: "Math Assignment" })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: new Date() })
  @IsOptional()
  dueDate?: Date;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  deleted?: boolean;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  order?: number;
}

export class UpdateClassMembershipAssignmentDto {
  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  currentGrade?: number;

  @ApiPropertyOptional({ example: "Excellent performance" })
  @IsOptional()
  @IsString()
  studentExplanation?: string;

  @ApiPropertyOptional({ example: 80 })
  @IsOptional()
  @IsNumber()
  expectedGrade?: number;

  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  grade?: number;

  @ApiPropertyOptional({ example: "Excellent performance" })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: "You are wrong!" })
  @IsOptional()
  @IsString()
  teacherComment?: string;

  @ApiPropertyOptional({ example: "Why I am so bad???" })
  @IsOptional()
  @IsString()
  studentComment?: string;

  @ApiPropertyOptional({ example: "Great work! I will fix the point" })
  @IsOptional()
  @IsString()
  teacherFinalisedComment?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isFinalised?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isRequested?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isReviewed?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isSubmitted?: boolean;
}

export class UpdateClassMembershipDto {
  @ApiPropertyOptional({ example: "1" })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({ example: "Duc Anh" })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiPropertyOptional({ example: "TEACHER" })
  @IsOptional()
  role?: ClassMembershipRole;
}
