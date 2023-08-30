"use client";
import { columns } from "@/app/search/columns";
import { DataTable } from "@/app/search/data-table";
import { useBreeds } from "@/hooks/useBreeds";
import { useSearchDogs } from "@/hooks/useSearchDogs";

export default function Search() {
  const { data: breeds } = useBreeds();
  const { data, isLoading, error } = useSearchDogs();

  return (
    <main className="container min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Search</h1>

      <DataTable columns={columns} data={data ?? []} />
    </main>
  );
}
