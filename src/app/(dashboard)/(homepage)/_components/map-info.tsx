import { HomePageTypes } from "@/types/homepage";
import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

interface MapInfoProps {
  data: HomePageTypes.stateInfoResponse[];
}

const stateMap: Map<string, HomePageTypes.States> = new Map([
  ["New South Wales", HomePageTypes.States.NSW],
  ["Queensland", HomePageTypes.States.QLD],
  ["Western Australia", HomePageTypes.States.WA],
  ["Victoria", HomePageTypes.States.VIC],
  ["Tasmania", HomePageTypes.States.TAS],
  ["South Australia", HomePageTypes.States.SA],
  ["Northern Territory", HomePageTypes.States.NT],
  ["Australian Capital Territory", HomePageTypes.States.ACT],
]);

export const MapInfo: FC<MapInfoProps> = (props) => {
  const { data: stateInfo } = props;

  const svgRef = useRef<SVGSVGElement>(null);

  const generateStateId = (state: string) => {
    return state.split(" ").join("_").toLowerCase();
  };

  useEffect(() => {
    const width = window.innerWidth / 2;
    const height = window.innerWidth / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const projection = d3
      .geoEquirectangular()
      .scale(1000)
      .center([133.7751, -25.2744])
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    d3.json("./states.geojson").then((data: any) => {
      svg
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("id", (d: any) => generateStateId(d.properties.STATE_NAME))
        .attr("d", (d: any) => pathGenerator(d))
        .attr("fill", "lightblue")
        .attr("stroke", "white");

      svg
        .selectAll("text")
        .data(data.features)
        .enter()
        .append("text")
        .attr("x", (d: any) => {
          const [x, y] = pathGenerator.centroid(d); // 获取中心点
          return x;
        })
        .attr("y", (d: any) => {
          const [x, y] = pathGenerator.centroid(d);
          return y;
        })
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .each(function (d: any) {
          const textElement = d3.select(this);

          const currentState = stateMap.get(d.properties.STATE_NAME);

          if (!currentState) return;

          const info = stateInfo.find((state) => state.state == currentState);

          if (!info) return;

          textElement
            .append("tspan")
            .text(d.properties.STATE_NAME)
            .attr("x", textElement.attr("x"))
            .attr("dy", 0);

          textElement
            .append("tspan")
            .text(`Devices: ${info.devices}`)
            .attr("x", textElement.attr("x"))
            .attr("dy", "1.2em");

          textElement
            .append("tspan")
            .text(`Hours: ${info.duration_hours.toFixed(2)}`)
            .attr("x", textElement.attr("x"))
            .attr("dy", "1.2em");
        });
    });
  }, []);

  return <svg ref={svgRef} />;
};
