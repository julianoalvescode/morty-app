import { InfoPagination } from "../models";
import { Location } from "../models/location";

export type GetAllLocationParams = Record<string, never>;

export type GetAllLocationResponse = {
  info: InfoPagination;
  results: Location[];
};
