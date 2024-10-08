import { useMemo } from "react";
import * as d3 from "d3";

export type TreeNode = {
  type: "node";
  value: number;
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  type: "leaf";
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;

type TreemapProps = {
  width: number;
  height: number;
  data: Tree;
};

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  const root = useMemo(() => {
    const treeGenerator = d3.treemap<Tree>().size([width, height]).padding(4);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allShapes = root.leaves().map((leaf) => {
    return (
      <g key={leaf.id}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={"#69b3a2"}
          style={{ opacity: leaf.data.value / 100 }}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          className="font-bold"
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 18}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          // fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      {allShapes}
    </svg>
  );
};
