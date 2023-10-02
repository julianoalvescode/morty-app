import { useQuery } from "@tanstack/react-query";
import { API } from "@/services/api/api";
import { GetAllCharacterParams } from "@/domain/usecases";

export function useAllCharacter(params?: GetAllCharacterParams) {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    ["get-all-chracter", params],
    async () => API.getAllCharacters(params)
  );

  return { data, isLoading, isSuccess, isError, refetch };
}
