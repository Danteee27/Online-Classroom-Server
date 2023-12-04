import { IPaginationOptions } from './types/pagination-options';
export declare const infinityPagination: <T>(data: {}, options: IPaginationOptions) => Readonly<{
    data: {};
    hasNextPage: boolean;
}>;
