"use client";

import { ChartComponent } from "@/components/chart";
import { HomePageTypes } from "@/types/homepage";
import React, { FC, useMemo } from "react";

export const InstallationBar: FC<{ data: HomePageTypes.Installation[] }> = (
  props
) => {
  const { data } = props;

  const rate = (d: HomePageTypes.Installation): number => {
    return d.num_downloads / d.rating;
  };

  const barcharData = useMemo(() => {
    const installs = data.sort((a, b) => rate(b) - rate(a));

    return {
      labels: installs.map((i) => i.app_name),
      datasets: [
        {
          label: "Installation vs Rating",
          data: installs.map(rate),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [data]);

  return (
    <ChartComponent config={{ type: "bar", data: barcharData }} />
  );
};
