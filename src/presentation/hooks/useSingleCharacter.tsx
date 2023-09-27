import { useQuery } from "@tanstack/react-query";
import { API } from "@/services/api/api";

export function useSingleCharacter(id: string) {
  const { data, isLoading } = useQuery(
    ["get-single-character", id],
    async () => await API.getSingleCharacter({ id })
  );

  return { data, isLoading };
}
