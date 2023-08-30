import { useQuery } from "@tanstack/react-query";

import { API_URL } from "@/lib/consts";

export function useBreeds() {
  return useQuery(["breeds"], () => {
    return fetch(`${API_URL}/dogs/breeds`, {
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
