"use client";
import { useBreeds } from "@/app/search/useBreeds";
import { useSearchDogs } from "@/app/search/useSearchDogs";

export default function Search() {
  const { data: breeds } = useBreeds();
  const { data, isLoading, error } = useSearchDogs();

  console.log(data);
  return (
    <main className="container min-h-screen p-4">
      <h1>Search</h1>
    </main>
  );
}
