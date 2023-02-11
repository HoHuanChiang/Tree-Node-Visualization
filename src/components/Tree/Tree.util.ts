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

// export const setNextTreeNodeState = (
//     treeNode: TreeNodeProps | undefined
// ): boolean => {
//     if (!treeNode) {
//         return false;
//     }
//     if (treeNode.isRoot && treeNode.status === TreeNodeStatus.Unvisited) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }

//     if (treeNode.status === TreeNodeStatus.Current) {
//         if (
//             treeNode.leftTreeNode &&
//             treeNode.leftTreeNode.status !== TreeNodeStatus.Visited
//         ) {
//             treeNode.leftTreeNode.status = TreeNodeStatus.Current;
//             treeNode.status = TreeNodeStatus.InProgress;
//             return false;
//         } else if (
//             treeNode.rightTreeNode &&
//             treeNode.rightTreeNode.status !== TreeNodeStatus.Visited
//         ) {
//             treeNode.rightTreeNode.status = TreeNodeStatus.Current;
//             treeNode.status = TreeNodeStatus.InProgress;
//             return false;
//         } else {
//             treeNode.status = TreeNodeStatus.Visited;
//             return true;
//         }
//     }

//     var leftResponse = setNextTreeNodeState(treeNode.leftTreeNode);
//     if (leftResponse) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }
//     var rightResponse = setNextTreeNodeState(treeNode.rightTreeNode);
//     if (rightResponse) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }
//     return false;
// };

// export const setPreviousTreeNodeState = (
//     treeNode: TreeNodeProps | undefined
// ): boolean => {
//     if (!treeNode) {
//         return false;
//     }

//     if (treeNode.isRoot && treeNode.status === TreeNodeStatus.Visited) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }

//     if (treeNode.status === TreeNodeStatus.Current) {
//         if (
//             treeNode.rightTreeNode &&
//             treeNode.rightTreeNode.status === TreeNodeStatus.Visited
//         ) {
//             treeNode.rightTreeNode.status = TreeNodeStatus.Current;
//             treeNode.status = TreeNodeStatus.InProgress;
//             return false;
//         } else if (
//             treeNode.leftTreeNode &&
//             treeNode.leftTreeNode.status === TreeNodeStatus.Visited
//         ) {
//             treeNode.leftTreeNode.status = TreeNodeStatus.Current;
//             treeNode.status = TreeNodeStatus.InProgress;
//             return false;
//         } else {
//             treeNode.status = TreeNodeStatus.Unvisited;
//             return true;
//         }
//     }

//     var leftResponse = setPreviousTreeNodeState(treeNode.leftTreeNode);
//     if (leftResponse) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }
//     var rightResponse = setPreviousTreeNodeState(treeNode.rightTreeNode);
//     if (rightResponse) {
//         treeNode.status = TreeNodeStatus.Current;
//         return false;
//     }

//     return false;
// };

const generateTree = (
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
        status: TreeNodeStatus.Unvisited,
    };
    return node;
};
