"use client";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/app/search/column-header";
import { Dog } from "@/lib/types";

export const columns: ColumnDef<Dog>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),
  },
  {
    accessorKey: "breed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Breed" />
    ),
  },
  {
    accessorKey: "zip_code",
    header: "Zip Code",
  },

  {
    accessorKey: "img",
    header: "Image",
  },
];
