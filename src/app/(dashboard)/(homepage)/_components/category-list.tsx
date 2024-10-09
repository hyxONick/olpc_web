import { DataTable } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import { HomePageTypes } from "@/types/homepage";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { FC } from "react";

export const CategoryList: FC<{ data: HomePageTypes.Category[] }> = ({
  data,
}) => {
  const categoryColumns: ColumnDef<HomePageTypes.Category>[] = [
    {
      accessorKey: "category_name",
      header: "Category name",
    },
    {
      accessorKey: "installations",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Installations
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "duration_hours",
      header: "Duration hours",
    },
  ];

  return <DataTable columns={categoryColumns} data={data} />;
};
