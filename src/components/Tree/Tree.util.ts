import { Location, TreeNodeProps } from "../TreeNode/TreeNode";

export const generateTree = (
    depth: number,
    currentDepth: number,
    radius: number,
    offSetTop: number,
    offSetLeft: number
): TreeNodeProps | undefined => {
    if (currentDepth == depth) {
        return undefined;
    }

    let top = offSetTop;
    let left = offSetLeft;

    console.log(offSetLeft);

    if (currentDepth === 0) {
        top = offSetTop / 2 - radius;
        left = offSetLeft - radius;
    }

    const location: Location = {
        top: top,
        left: left,
    };
    const leftNode = generateTree(
        depth,
        currentDepth + 1,
        radius,
        offSetTop,
        -Math.abs(offSetLeft) / 2
    );
    const rightNode = generateTree(
        depth,
        currentDepth + 1,
        radius,
        offSetTop,
        Math.abs(offSetLeft) / 2
    );

    const node: TreeNodeProps = {
        radius: radius,
        location: location,
        leftTreeNode: leftNode,
        rightTreeNode: rightNode,
    };
    return node;
};
