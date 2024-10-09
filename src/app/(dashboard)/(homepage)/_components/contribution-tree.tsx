"use client";

import { TreeLeaf, Treemap, TreeNode } from "@/components/treemap";
import { HomePageTypes } from "@/types/homepage";
import { FC, useMemo } from "react";

interface ContributionTreeProps {
  data: HomePageTypes.Contribution[];
  size: { width: number; height: number };
}

export const ContributionTree: FC<ContributionTreeProps> = (props) => {
  const { data, size } = props;

  const treeData: TreeNode = useMemo(() => {
    const children: TreeLeaf[] = data.map((d) => {
      return {
        type: "leaf",
        name: d.developer,
        value: d.contribution,
      };
    });

    return {
      type: "node",
      name: "tree",
      value: 0,
      children: children.sort((a, b) => b.value - a.value),
    };
  }, [data]);

  return <Treemap data={treeData} width={size.width} height={size.height} />;
};
