export interface Pagination<T>{
    itemsPerPage: number;
    totalItems: number;
    page: number;
    totalPages: number;
    records: Array<T>;
}