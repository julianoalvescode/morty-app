import { Episode } from "../models/episode";

export type GetMultipleEpisodesParams = {
  ids: string;
};

export type GetMultipleEpisodesResponse = Episode[];
