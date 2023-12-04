import { Status } from 'src/statuses/entities/status.entity';
import { Repository } from 'typeorm';
export declare class StatusSeedService {
    private repository;
    constructor(repository: Repository<Status>);
    run(): any;
}
