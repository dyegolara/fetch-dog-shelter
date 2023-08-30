"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Dog } from "@/lib/types";

export const columns: ColumnDef<Dog>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "breed",
    header: "Breed",
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
