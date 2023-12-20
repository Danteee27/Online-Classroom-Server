import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsString } from "class-validator";

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
}

export class UpdateClassMembershipAssignmentDto {
  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  currentGrade?: number;

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

  @ApiPropertyOptional({ example: "Great work!" })
  @IsOptional()
  @IsString()
  studentReview?: string;

  @ApiPropertyOptional({ example: "Keep it up!" })
  @IsOptional()
  @IsString()
  teacherComment?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isFinalised?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isRequested?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  isReviewed?: boolean;
}
