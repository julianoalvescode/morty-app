import { InfoPagination } from "../models";
import { Episode } from "../models/episode";

export type GetAllEpisodeParams = Record<string, never>;

export type GetAllEpisodeResponse = {
  info: InfoPagination;
  results: Episode[];
};
