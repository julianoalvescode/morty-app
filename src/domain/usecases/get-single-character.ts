import { Character } from "../models/character";

export interface GetSingleCharacterParams {
  id: string;
}

export type GetSingleCharacterResponse = Character;
