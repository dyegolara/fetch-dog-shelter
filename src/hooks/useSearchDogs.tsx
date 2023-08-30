import { useQuery } from "@tanstack/react-query";
import qs from "query-string";

import { API_URL } from "@/lib/consts";
import { Dog, SearchDogsParams } from "@/lib/types";

export function useSearchDogs(
  params: SearchDogsParams = { sort: "breed:asc" }
) {
  return useQuery<Dog[]>(["search", params], async () => {
    const response = await fetch(
      `${API_URL}/dogs/search?${qs.stringify(params ?? {})}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      }
    ).then((res) => {
      if (res.status === 200) return res.json();
      throw res;
    });

    return fetch(`${API_URL}/dogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
      body: JSON.stringify(response?.resultIds),
    }).then((res) => {
      if (res.status === 200) return res.json();
      throw res;
    });
  });
}
