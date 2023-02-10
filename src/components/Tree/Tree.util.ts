import { TreeNodeProps } from "./TreeNode/TreeNode";

export interface Location {
    top: number;
    left: number;
}

export const generateTree = (
    depth: number,
    currentDepth: number,
    radius: number,
    offSetTop: number,
    offSetLeft: number,
    isRoot: boolean
): TreeNodeProps | undefined => {
    if (currentDepth == depth) {
        return undefined;
    }

    let top = offSetTop;
    let left = offSetLeft;

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
        -Math.abs(offSetLeft) / 2,
        false
    );
    const rightNode = generateTree(
        depth,
        currentDepth + 1,
        radius,
        offSetTop,
        Math.abs(offSetLeft) / 2,
        false
    );

    const node: TreeNodeProps = {
        radius: radius,
        location: location,
        leftTreeNode: leftNode,
        rightTreeNode: rightNode,
        isRoot: isRoot,
    };
    return node;
};
