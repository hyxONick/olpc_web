import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Category = {
  id: string;
  app_name: string;
  usage: number;
  state: "NSW" | "ACT" | "VCT";
};

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "app_name",
    header: "App name",
  },
  {
    accessorKey: "usage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Usage
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "state",
    header: "State",
  },
];

export const categoryData: Category[] = [
  {
    id: "728ed52f",
    app_name: "test",
    usage: 10,
    state: "NSW",
  },
  {
    id: "728ed52f",
    app_name: "test",
    usage: 11,
    state: "NSW",
  },

  {
    id: "728ed52f",
    app_name: "test",
    usage: 9,
    state: "NSW",
  },
  {
    id: "728ed52f",
    app_name: "test",
    usage: 50,
    state: "NSW",
  },
];
