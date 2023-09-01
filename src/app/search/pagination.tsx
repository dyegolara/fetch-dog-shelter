import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { useSetSearchParams } from "@/hooks/useSetSearchParams";
import { PAGE_SIZE } from "@/lib/consts";

export function Pagination({
  canGoNext,
  canGoPrev,
  total,
  isLoading,
}: {
  canGoNext: boolean;
  canGoPrev: boolean;
  total: number;
  isLoading?: boolean;
}) {
  const [totalPages, setTotalPages] = React.useState(0);
  const searchParams = useSearchParams()!;
  const setSearchParams = useSetSearchParams();

  const page = searchParams.get("page");

  useEffect(() => {
    if (!isLoading) setTotalPages(Math.ceil(total / PAGE_SIZE));
  }, [total, isLoading]);

  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="font-bold">Page: </span>
        <span className="">
          {page || 1} of {totalPages}
        </span>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearchParams("page", Math.max(0, Number(page) - 1).toString());
          }}
          disabled={!canGoPrev}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearchParams(
              "page",
              Math.min(totalPages, Number(page) + 1).toString()
            );
          }}
          disabled={!canGoNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
