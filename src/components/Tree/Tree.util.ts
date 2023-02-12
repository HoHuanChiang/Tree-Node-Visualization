import { BFS } from "../../algorithms/BFS";
import { CustomAlgorithm } from "../../algorithms/CustomAlgorithm";
import { DFSInorder } from "../../algorithms/DFSInorder";
import { Algorithm } from "../Board/Board";
import TreeNode, { TreeNodeProps, TreeNodeStatus } from "./TreeNode/TreeNode";

export interface Location {
    top: number;
    left: number;
}

export const getDefaultTree = (
    depth: number,
    width: number,
    height: number
) => {
    const columns = Math.pow(2, depth);
    const treeNodeRadius = width / columns;
    const rootNodeProps = generateTree(
        1,
        depth,
        0,
        treeNodeRadius,
        height / depth,
        width,
        true
    );
    return rootNodeProps;
};

export const getAlgorithm = (algorithm: Algorithm): CustomAlgorithm => {
    switch (algorithm) {
        case Algorithm.DFS_INORDER:
            return new DFSInorder();
        default:
            return new BFS();
    }
};

export const updateTreeNodeDisablity = (id: number, root: TreeNodeProps) => {
    // Find directions to the tree node
    const inversedDirections: boolean[] = [];
    let current = id;
    while (current > 1) {
        inversedDirections.push(current % 2 !== 0);
        current = Math.floor(current / 2);
    }

    // Go to tree node
    let currentTreeNode = root;
    for (let i = inversedDirections.length - 1; i >= 0; i--) {
        if (inversedDirections[i] && currentTreeNode.rightTreeNode) {
            currentTreeNode = currentTreeNode.rightTreeNode;
        } else if (!inversedDirections[i] && currentTreeNode.leftTreeNode) {
            currentTreeNode = currentTreeNode.leftTreeNode;
        } else {
            throw "this is incorrect, tree not should be there!";
        }
    }

    // Disabled tree node and its children
    if (!currentTreeNode.parentDisabled) {
        const parentDisabled = currentTreeNode.parentDisabled;
        disabledTreeNodeAndChildrens(
            currentTreeNode,
            currentTreeNode.status !== TreeNodeStatus.Disabled
        );
        currentTreeNode.parentDisabled = parentDisabled;
    }
};

const disabledTreeNodeAndChildrens = (
    treeNode: TreeNodeProps | undefined,
    isDisabled: boolean
) => {
    if (!treeNode) {
        return;
    }
    treeNode.parentDisabled = isDisabled;
    treeNode.status = isDisabled
        ? TreeNodeStatus.Disabled
        : TreeNodeStatus.Unvisited;
    disabledTreeNodeAndChildrens(treeNode.leftTreeNode, isDisabled);
    disabledTreeNodeAndChildrens(treeNode.rightTreeNode, isDisabled);
};

const generateTree = (
    id: number,
    depth: number,
    currentDepth: number,
    radius: number,
    offSetTop: number,
    offSetLeft: number,
    isRoot: boolean
): TreeNodeProps | undefined => {
    if (currentDepth === depth) {
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
        id * 2,
        depth,
        currentDepth + 1,
        radius,
        offSetTop,
        -Math.abs(offSetLeft) / 2,
        false
    );
    const rightNode = generateTree(
        id * 2 + 1,
        depth,
        currentDepth + 1,
        radius,
        offSetTop,
        Math.abs(offSetLeft) / 2,
        false
    );

    const node: TreeNodeProps = {
        id: id,
        radius: radius,
        location: location,
        leftTreeNode: leftNode,
        rightTreeNode: rightNode,
        isRoot: isRoot,
        status: TreeNodeStatus.Unvisited,
        parentDisabled: false,
    };
    return node;
};
