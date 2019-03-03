export interface PaginatedResponsePayload<T> {
    items: T[];
    pageCount: number;
    pages: number;
    totalCount: number;
}
