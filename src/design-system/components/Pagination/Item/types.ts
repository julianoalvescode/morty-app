export type PaginationItem = {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
};
