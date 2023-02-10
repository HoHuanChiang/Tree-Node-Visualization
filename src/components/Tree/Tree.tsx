import React from "react";
import { generateTree } from "./Tree.util";
import TreeNode from "./TreeNode/TreeNode";

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
        width / 2,
        true
    );

    return <div>{rootNodeProps && <TreeNode {...rootNodeProps} />}</div>;
};

export default Tree;
