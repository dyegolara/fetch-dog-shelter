"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { columns } from "@/app/search/columns";
import { DataTable } from "@/app/search/data-table";
import { Pagination } from "@/app/search/pagination";
import { useBreeds } from "@/hooks/useBreeds";
import { useDogs } from "@/hooks/useDogs";
import { useSearchDogs } from "@/hooks/useSearchDogs";

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { data: breeds } = useBreeds();
  const { data: searchDogsResponse } = useSearchDogs(searchParams);
  const { data } = useDogs(searchDogsResponse?.resultIds, {
    enabled: !!searchDogsResponse?.resultIds,
  });

  useEffect(() => {
    if (!searchParams.sort) redirect("/search?sort=breed:asc");
  }, [searchParams.sort]);

  return (
    <main className="container min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Search</h1>
      <Pagination
        canGoNext={!!searchDogsResponse?.next}
        canGoPrev={!!searchDogsResponse?.prev}
        total={searchDogsResponse?.total ?? 0}
      />
      <DataTable columns={columns} data={data ?? []} />
      <Pagination
        canGoNext={!!searchDogsResponse?.next}
        canGoPrev={!!searchDogsResponse?.prev}
        total={searchDogsResponse?.total ?? 0}
      />
    </main>
  );
}
