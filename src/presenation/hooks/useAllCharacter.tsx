import { useQuery } from "@tanstack/react-query";
import { API } from "../../services/api/api";

export function useAllCharacter() {
  const { data, isLoading } = useQuery(
    ["get-all-chracter"],
    API.getAllCharacters
  );

  return { data, isLoading };
}
