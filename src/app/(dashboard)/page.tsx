"use client";

import { AustraliaMap } from "./_components/map";
import { useEffect, useRef, useState } from "react";
import { ChartComponent } from "@/components/chart";
import { Chart } from "chart.js";
import { DataTable } from "@/components/dataTable";
import { Separator } from "@/components/ui/separator";
import { installation } from "@/mock/installation";
import { categoryColumns, categoryData } from "@/mock/category";
import { Treemap } from "@/components/treemap";
import { treeData } from "@/mock/tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashBoardPage = () => {
  const [state, setState] = useState<string>("");

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const chartRef = useRef<Chart>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.clientWidth);
      setHeight(contentRef.current.clientHeight);
    }
  }, [contentRef]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex">
        <AustraliaMap onSelectState={setState} selectedState={state} />

        <div className="flex-1 flex flex-col ">
          <div className="w-full h-1/2">
            <ChartComponent config={installation} ref={chartRef} />
          </div>

          <Separator className="my-4" />

          <Tabs
            defaultValue="usage"
            className="flex-1 p-3"
            ref={contentRef}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="usage">Top 10 usage</TabsTrigger>
              <TabsTrigger value="contribution">
                Top 10 contribution
              </TabsTrigger>
            </TabsList>

            <TabsContent value="usage">
              <DataTable columns={categoryColumns} data={categoryData} />
            </TabsContent>

            <TabsContent value="contribution">
              <Treemap data={treeData} width={width} height={height} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
