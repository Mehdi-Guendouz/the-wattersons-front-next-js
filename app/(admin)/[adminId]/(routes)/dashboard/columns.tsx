"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusButton } from "@/components/StatusButton";
import { CellAction } from "./CellActions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TableSeller = {
  id: string;
  status: string;
  name: string;
  type: string;
  numberCommand: string;
  numberProduct: string;
};

export const columns: ColumnDef<TableSeller>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Status",
    id: "status",
    cell: ({ row }) => <StatusButton status={row.original.status} />,
  },
  {
    accessorKey: "name",
    header: "nom et prenom",
  },
  {
    accessorKey: "type",
    header: "type",
  },

  {
    accessorKey: "numberCommand",
    header: "Nombre de commandes",
  },
  {
    accessorKey: "numberProduct",
    header: "Nombre de produits",
  },
  {
    header: "Actions",
    id: "action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
