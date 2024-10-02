"use client";

import React, { Fragment } from "react";
import { Selection } from "@/components/selection";
import { Button } from "@/components/ui/button";
import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, balanceSheet } from "@/mock/stack-bar";
import { states } from "@/mock/states";
import { LineChart } from "@mui/x-charts/LineChart";
import { installation } from "@/mock/installation";

const page = () => {
  return (
    <Fragment>
      <div className="w-1/2 flex flex-col justify-around">
        <div className="flex flex-col gap-3 h-1/2 w-1/2">
          <Selection options={states} label="State&nbsp;&nbsp;&nbsp;" />
          <Selection options={[]} label="School" />
          <Button>Search</Button>
        </div>

        <BarChart
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

      <div className="flex-1 flex flex-col">
        <div className="h-1/2">
          <Selection label="App Category" options={[]} />
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />
        </div>

        <div className="flex-1">
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
    </Fragment>
  );
};

export default page;
