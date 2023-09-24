import axios from "axios";
import {
  GetAllCharacterResponse,
  GetSingleCharacterParams,
  GetSingleCharacterResponse,
} from "../../domain/usecases";

class ApiService {
  async getAllCharacters(): Promise<GetAllCharacterResponse> {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return data;
  }

  async getSingleCharacter(
    params: GetSingleCharacterParams
  ): Promise<GetSingleCharacterResponse> {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${params?.id}`
    );
    return data;
  }
}

export const API = new ApiService();
