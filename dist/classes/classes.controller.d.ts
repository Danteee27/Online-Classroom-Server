import { NullableType } from "src/utils/types/nullable.type";
import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findOne(classCode: string): Promise<NullableType<Class>>;
}
