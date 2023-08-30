"use client";
import { useQuery } from "@tanstack/react-query";

function useBreeds() {
  return useQuery(["breeds"], async () => {
    const response = await fetch(
      "https://frontend-take-home-service.fetch.com/dogs/breeds",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      }
    );
    return response.json();
  });
}

export default function Search() {
  const { data, isLoading, error } = useBreeds();

  console.log(data);
  return (
    <main className="container min-h-screen p-4">
      <h1>Search</h1>
    </main>
  );
}
