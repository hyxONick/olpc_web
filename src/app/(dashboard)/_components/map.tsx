// import * as d3 from "d3";
// import { FC, useEffect, useRef } from "react";

// interface AustralizMapProps {
//   onSelectState?: (state: string) => void;
//   selectedState?: string;
// }

// export const AustraliaMap: FC<AustralizMapProps> = (props) => {
//   const { onSelectState, selectedState = "" } = props;

//   const stateInfo = getStateInfo;

//   const svgRef = useRef<SVGSVGElement>(null);

//   const generateStateId = (state: string) => {
//     return state.split(" ").join("_").toLowerCase();
//   };

//   useEffect(() => {
//     const width = window.innerWidth / 2;
//     const height = window.innerWidth / 2;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     const projection = d3
//       .geoEquirectangular()
//       .scale(800)
//       .center([132.08, -23.07])
//       .translate([width / 2, height / 2]);

//     const pathGenerator = d3.geoPath().projection(projection);

//     d3.json("./states.geojson").then((data: any) => {
//       svg
//         .selectAll("path")
//         .data(data.features)
//         .enter()
//         .append("path")
//         .attr("id", (d: any) => generateStateId(d.properties.STATE_NAME))
//         .attr("d", (d: any) => pathGenerator(d))
//         .attr("fill", "lightblue")
//         .attr("stroke", "white")
//         .on("click", function (d, i: any) {
//           // onSelectState(i.properties.STATE_NAME);
//         });

//       console.log(data);

//       svg
//         .selectAll("text")
//         .data(data.features)
//         .enter()
//         .append("text")
//         .attr("x", (d: any) => {
//           const [x, y] = pathGenerator.centroid(d); // 获取中心点
//           return x;
//         })
//         .attr("y", (d: any) => {
//           const [x, y] = pathGenerator.centroid(d);
//           return y;
//         })
//         .attr("text-anchor", "middle")
//         .attr("font-size", "12px")
//         .attr("fill", "black")
//         .text((d: any) => d.properties.STATE_NAME); // 显示州名
//     });
//   }, []);

//   useEffect(() => {
//     if (!selectedState) return;

//     const id = `#${generateStateId(selectedState)}`;
//     d3.selectAll("path").attr("fill", "lightblue");
//     d3.select(id).attr("fill", "orange");
//   }, [selectedState]);

//   return <svg ref={svgRef} />;
// };
