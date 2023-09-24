import { Character } from "../models/character";

export type GetMultipleCharacterParams = {
  ids: string;
};

export type GetMultipleCharacterResponse = Character[];
