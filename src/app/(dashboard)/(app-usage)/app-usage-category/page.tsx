"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { doughnut_series } from "@/mock/doughnut";
import { addLabels, balanceSheet } from "@/mock/stack-bar";
import { BarChart, BarItemIdentifier, PieChart } from "@mui/x-charts";
import React, { Fragment, useState } from "react";

const page = () => {
  const [state, setState] = useState<string>("");

  const Navigation = () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Button
              className="text-primary"
              size="sm"
              variant="ghost"
              onClick={() => setState("")}
            >
              Category
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
    );
  };

  const onBarItemClick = (item: BarItemIdentifier) => {
    console.log(item);
  };

  return (
    <Fragment>
      <div className="w-1/2 flex flex-col justify-around gap-4">
        <Navigation />

        <Label>Usage trends versus installs per app category</Label>
        <BarChart
          onItemClick={(e, i) => onBarItemClick(i)}
          dataset={balanceSheet}
          series={addLabels([
            { dataKey: "currAss", stack: "assets" },
            { dataKey: "nCurrAss", stack: "assets" },
            { dataKey: "curLia", stack: "liability" },
            { dataKey: "nCurLia", stack: "liability" },
            { dataKey: "capStock", stack: "equity" },
            { dataKey: "retEarn", stack: "equity" },
            { dataKey: "treas", stack: "equity" },
          ])}
          xAxis={[{ scaleType: "band", dataKey: "year" }]}
          slotProps={{ legend: { hidden: true } }}
        />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="h-1/2 flex justify-center flex-col items-center">
          <Label>App Category (Top Performing Base on Duration)</Label>
          <PieChart
            series={doughnut_series}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>

        <div className="flex-1 h-1/2 flex justify-center p-10 relative">
          <Label className="absolute left-0 top-0 text-center w-full">
            App Category (Low Performing Base on Duration)
          </Label>
          <PieChart
            series={doughnut_series}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
