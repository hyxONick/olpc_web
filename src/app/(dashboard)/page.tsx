"use client";

import { AustraliaMap } from "./_components/map";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "@/components/dataTable";
import { Separator } from "@/components/ui/separator";
import { installation } from "@/mock/installation";
import { useSize } from "ahooks";
import { BarChart } from "@mui/x-charts/BarChart";
import { categoryColumns, categoryData } from "@/mock/category";
import { Treemap } from "@/components/treemap";
import { treeData } from "@/mock/tree";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashBoardPage = () => {
  const [state, setState] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!contentRef.current) return;
    const width = contentRef.current.clientWidth;
    const height = contentRef.current.clientHeight;
    setSize({ width, height });
  }, [contentRef]);

  const usage = "Top 10 usage";
  const contribution = "Top 10 contribution of developers";

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2">
        <AustraliaMap onSelectState={setState} selectedState={state} />
      </div>

      <div className="flex-1 flex flex-col ">
        <div className="w-full h-1/2">
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

        <Tabs defaultValue="usage" ref={contentRef}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="usage">{usage}</TabsTrigger>
            <TabsTrigger value="contribution">{contribution}</TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <DataTable columns={categoryColumns} data={categoryData} />
          </TabsContent>

          <TabsContent value="contribution">
            <Treemap data={treeData} width={size.width} height={size.height} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoardPage;
