"use client";

import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomepageMock } from "@/mock/homepage";
import { CategoryList } from "./_components/category-list";
import { ContributionTree } from "./_components/contribution-tree";
import { InstallationBar } from "./_components/installation-bar";
import { MapInfo } from "./_components/map-info";

const DashBoardPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  fetch("https://olpc-dashboard.uc.r.appspot.com/app_usage/category", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: "duration",
      state: "",
      geolocationType: "",
      startDate: "",
      endDate: "",
      groupByApp: true,
    }),
  }).then(console.log);

  useEffect(() => {
    if (!contentRef.current) return;
    const width = contentRef.current.clientWidth;
    const height = contentRef.current.clientHeight;
    setSize({ width, height });
  }, [contentRef]);

  const usage = "Top 10 usage";
  const contribution = "Top 10 contribution of developers";

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-center">
        <MapInfo data={HomepageMock.StateInfo} />
      </div>

      <div className="flex-1 flex flex-col ">
        <div className="w-full h-full">
          <InstallationBar data={HomepageMock.Installation} />
        </div>

        <Separator className="my-4" />

        <Tabs defaultValue="usage" ref={contentRef}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="usage">{usage}</TabsTrigger>
            <TabsTrigger value="contribution">{contribution}</TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <CategoryList data={HomepageMock.Category} />
          </TabsContent>

          <TabsContent value="contribution">
            <ContributionTree
              data={HomepageMock.Contribution}
              size={{
                width: size.width,
                height: size.height,
              }}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Separator className="my-4" />
    </div>
  );
};

export default DashBoardPage;
