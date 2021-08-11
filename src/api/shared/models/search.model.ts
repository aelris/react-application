export interface Search {
  sortBy: string;
  sortOrder: string;
  search: string;
  searchBy: "title" | "genres";
  filter: string[];
}
