export interface PaginatedItems<T = any> {
  items: T[];
  pageCount: number;
  pages: number;
  totalCount: number;
}
