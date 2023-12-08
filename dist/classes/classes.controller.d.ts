import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { Class } from "./entities/class.entity";
import { NullableType } from "src/utils/types/nullable.type";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findOne(id: string): Promise<NullableType<Class>>;
}
