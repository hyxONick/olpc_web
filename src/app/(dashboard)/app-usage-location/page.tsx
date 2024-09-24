"use client";

import { Selection } from "@/components/selection";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PieChart } from "@mui/x-charts/PieChart";
import { states } from "@/mock/states";
import { BarChart, DefaultizedPieValueType } from "@mui/x-charts";
import { installation } from "@/mock/installation";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/time-span";
import { Separator } from "@/components/ui/separator";

const page = () => {
  const [state, setState] = useState<string>("");

  const onPieItemClick = (item: DefaultizedPieValueType) => {
    setState(item.label as string);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Button
              className="text-primary"
              size="sm"
              variant="ghost"
              onClick={() => setState("")}
            >
              Geolocation
            </Button>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Button size="sm" variant="ghost" className="text-primary">
              {state}
            </Button>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex-1 flex">
        <div className="w-1/2">
          {state === "" ? (
            <PieChart
              onItemClick={(e, p, i) => onPieItemClick(i)}
              series={[
                {
                  arcLabel(item) {
                    return (item.label || "") + ": " + item.value;
                  },
                  data: states.map((state) => ({
                    id: state.value,
                    value: 20,
                    label: state.label,
                  })),
                },
              ]}
            />
          ) : (
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
            />
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <div className="h-1/2 flex flex-col">
            <div className="w-full flex items-center gap-3">
              <DatePickerWithRange />
              <Button>Search</Button>
            </div>

            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: installation.xAxis,
                  label: "App usage",
                },
              ]}
              yAxis={[{ label: "Installation" }]}
              series={[{ data: installation.values }]}
            />
          </div>

          <Separator className="my-4" />

          <div className="flex-1 flex flex-col">
            <Selection label="Category" options={[]}></Selection>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: installation.xAxis,
                  label: "App usage",
                },
              ]}
              yAxis={[{ label: "Installation" }]}
              series={[{ data: installation.values }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
