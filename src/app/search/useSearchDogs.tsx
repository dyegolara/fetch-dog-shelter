import { useQuery } from "@tanstack/react-query";
import qs from "query-string";

import { API_URL } from "@/lib/consts";

export type SearchDogsParams = {
  breed: string[];
  zipCodes: string[];
  ageMin: number;
  ageMax: number;
};

export function useSearchDogs(params?: SearchDogsParams) {
  return useQuery(["search", params], async () => {
    const { resultIds } = await fetch(
      `${API_URL}/dogs/search?${qs.stringify(params ?? {})}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      }
    ).then((res) => res.json());

    const response = await fetch(`${API_URL}/dogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
      body: JSON.stringify(resultIds),
    });
    return response.json();
  });
}
