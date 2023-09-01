import { QueryOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";

import { API_URL } from "@/lib/consts";
import { Dog } from "@/lib/types";

export function useDogs(dogsIds?: string[], options?: UseQueryOptions<Dog[]>) {
  return useQuery<Dog[]>(
    ["dogs", dogsIds],
    () => {
      return fetch(`${API_URL}/dogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(dogsIds),
      }).then((res) => {
        if (res.status === 200) return res.json();
        throw res;
      });
    },
    options
  );
}
