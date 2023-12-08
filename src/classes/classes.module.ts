import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { ClassMembership } from "./entities/class-membership.entity";
import { ClassesController } from "./classes.controller";
import { IsExist } from "src/utils/validators/is-exists.validator";
import { IsNotExist } from "src/utils/validators/is-not-exists.validator";
import { ClassesService } from "./classes.service";

@Module({
  imports: [TypeOrmModule.forFeature([Class, ClassMembership])],
  controllers: [ClassesController],
  providers: [IsExist, IsNotExist, ClassesService],
  exports: [ClassesService],
})
export class ClassesModule {}
