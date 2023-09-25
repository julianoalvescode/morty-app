import { InfoPagination } from "../models";
import { Character } from "../models/character";

export type GetAllCharacterParams = {
  page?: number;
};

export type GetAllCharacterResponse = {
  info: InfoPagination;
  results: Character[];
};
