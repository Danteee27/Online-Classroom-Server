import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";
import { CreateClassDto } from "./dto/create-class.dto";
import { EntityCondition } from "src/utils/types/entity-condition.type";
import { NullableType } from "src/utils/types/nullable.type";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>
  ) {}

  create(createClassDto: CreateClassDto): Promise<Class> {
    return this.classRepository.save(
      this.classRepository.create(createClassDto)
    );
  }

  findOne(fields: EntityCondition<Class>): Promise<NullableType<Class>> {
    return this.classRepository.findOne({
      where: fields,
    });
  }
}
