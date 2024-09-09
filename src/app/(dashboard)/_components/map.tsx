import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

interface AustralizMapProps {
  onSelectState: (state: string) => void;
  selectedState?: string;
}

export const AustraliaMap: FC<AustralizMapProps> = (props) => {
  const { onSelectState, selectedState = "" } = props;

  const svgRef = useRef<SVGSVGElement>(null);

  const generateStateId = (state: string) => {
    return state.split(" ").join("_").toLowerCase();
  };

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", 400)
      .attr("height", 400);

    const projection = d3
      .geoEquirectangular()
      .scale(400)
      .center([132.08, -23.07])
      .translate([200, 200]);

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
        .attr("stroke", "white")
        .on("click", function (d, i: any) {
          onSelectState(i.properties.STATE_NAME);
        });
    });
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    const id = `#${generateStateId(selectedState)}`
    d3.selectAll("path").attr("fill", "lightblue");
    d3.select(id).attr("fill", "orange");
  }, [selectedState]);

  return <svg ref={svgRef} />;
};
