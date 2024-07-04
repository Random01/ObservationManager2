export interface AdminComponentState<T> {
  items: T[];
  isLoading: boolean;
  displayedColumns: string[];
  pageSize: number;
  pageSizeOptions: number[];
  currentPage: number;
  totalCount: number;
}
