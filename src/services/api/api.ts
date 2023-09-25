import {
  GetAllCharacterParams,
  GetAllCharacterResponse,
  GetSingleCharacterParams,
  GetSingleCharacterResponse,
} from "../../domain/usecases";

import { AxiosAPI } from "./axios";

import queryString from "query-string";

class ApiService {
  async getAllCharacters(
    params: GetAllCharacterParams
  ): Promise<GetAllCharacterResponse> {
    const query = queryString.stringify(params);
    const { data } = await AxiosAPI.get(`/character?${query}`);
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
