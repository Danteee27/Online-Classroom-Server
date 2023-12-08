import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";
import { CreateClassDto } from "./dto/create-class.dto";
import { EntityCondition } from "src/utils/types/entity-condition.type";
import { NullableType } from "src/utils/types/nullable.type";
export declare class ClassesService {
    private classRepository;
    constructor(classRepository: Repository<Class>);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findOne(fields: EntityCondition<Class>): Promise<NullableType<Class>>;
}
