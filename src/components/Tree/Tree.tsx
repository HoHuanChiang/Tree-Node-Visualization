import { relative } from "path";
import React from "react";
import TreeNode from "../TreeNode/TreeNode";
import { generateTree } from "./Tree.util";

interface TreeProps {
    width: number;
    height: number;
    depth: number;
}

const Tree = (props: TreeProps) => {
    const { width, height, depth } = props;
    const columns = Math.pow(2, depth);
    const treeNodeRadius = width / columns;
    const rootNodeProps = generateTree(
        depth,
        0,
        treeNodeRadius,
        height / depth,
        width / 2
    );

    return <div>{rootNodeProps && <TreeNode {...rootNodeProps} />}</div>;
};

export default Tree;
