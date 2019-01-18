export interface Response<T> {
    items: T[];
    pageCount: number;
    pages: number;
    totalCount: number;
}
