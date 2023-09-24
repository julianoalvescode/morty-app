import { Episode } from "../models/episode";

export type GetSingleEpisodeParams = {
  id: string;
};

export type GetSingleEpisodeResponse = Episode;
