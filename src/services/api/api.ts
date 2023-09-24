import {
  GetAllCharacterResponse,
  GetSingleCharacterParams,
  GetSingleCharacterResponse,
} from "../../domain/usecases";

import { AxiosAPI } from "./axios";

class ApiService {
  async getAllCharacters(): Promise<GetAllCharacterResponse> {
    const { data } = await AxiosAPI.get(`/character`);
    return data;
  }

  async getSingleCharacter(
    params: GetSingleCharacterParams
  ): Promise<GetSingleCharacterResponse> {
    const { data } = await AxiosAPI.get(`/character/${params?.id}`);
    return data;
  }
}

export const API = new ApiService();
