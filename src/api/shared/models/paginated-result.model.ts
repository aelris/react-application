import { Pagination } from "./pagination.model";

export interface PaginatedResult<ResultModel> extends Pagination {
  data: ResultModel[];
  totalAmount: number;
}
