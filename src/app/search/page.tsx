"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { columns } from "@/app/search/columns";
import { DataTable } from "@/app/search/data-table";
import { Filters } from "@/app/search/filters";
import { Pagination } from "@/app/search/pagination";
import { useDogs } from "@/hooks/useDogs";
import { useSearchDogs } from "@/hooks/useSearchDogs";

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { data: searchDogsResponse } = useSearchDogs(searchParams);
  const { data, isLoading } = useDogs(searchDogsResponse?.resultIds, {
    enabled: !!searchDogsResponse?.resultIds,
  });

  useEffect(() => {
    if (!searchParams.sort) redirect("/search?sort=breed:asc");
  }, [searchParams.sort]);

  return (
    <main className="container min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Search</h1>

      <Filters isLoading={isLoading} />
      <Pagination
        canGoNext={!!searchDogsResponse?.next}
        canGoPrev={!!searchDogsResponse?.prev}
        total={searchDogsResponse?.total ?? 0}
        isLoading={isLoading}
      />
      <DataTable columns={columns} data={data ?? []} isLoading={isLoading} />
      <Pagination
        canGoNext={!!searchDogsResponse?.next}
        canGoPrev={!!searchDogsResponse?.prev}
        total={searchDogsResponse?.total ?? 0}
        isLoading={isLoading}
      />
    </main>
  );
}
