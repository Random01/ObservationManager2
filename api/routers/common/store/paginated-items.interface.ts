export interface PaginatedItems<T = any> {
  /** Paginated items */
  items: T[];
  /** Number of items per page  */
  pageCount: number;
  /** Total Count of pages */
  pages: number;
  /** Total Count of items */
  totalCount: number;
}
