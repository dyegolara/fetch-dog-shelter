import { useQuery } from "@tanstack/react-query";
import qs from "query-string";

import { API_URL, PAGE_SIZE } from "@/lib/consts";
import { SearchDogsParams, SearchDogsResponse } from "@/lib/types";

const DEFAULT_PARAMS: SearchDogsParams = {
  sort: "breed:asc",
  size: PAGE_SIZE,
  from: 0,
};

export function useSearchDogs(_params?: { [key: string]: string }) {
  const params = {
    ...DEFAULT_PARAMS,
    ..._params,
  };
  if (params?.page && params?.size && Number(params?.page) >= 1) {
    params.from = params.size * (params.page - 1);
  }

  return useQuery<SearchDogsResponse>(["search", params], () => {
    return fetch(`${API_URL}/dogs/search?${qs.stringify(params ?? {})}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) return res.json();
      throw res;
    });
  });
}
