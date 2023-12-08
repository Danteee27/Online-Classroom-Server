import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Validate } from "class-validator";
import { lowerCaseTransformer } from "src/utils/transformers/lower-case.transformer";
import { IsNotExist } from "src/utils/validators/is-not-exists.validator";

export class CreateClassDto {
  @ApiProperty({ example: "Math 101" })
  @IsNotEmpty()
  @IsString()
  className: string;

  @ApiProperty({ example: "MATH101" })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @Validate(IsNotExist, ["Class"], { message: "classCodeAlreadyExists" })
  @IsString()
  classCode: string;

  @ApiPropertyOptional({ example: "This is a math class" })
  description: string | null;
}
