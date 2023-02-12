import { Location } from "../Tree.util";
import { TreeNodeStatus } from "./TreeNode";

export const getRotateDegree = (
    parentTreeNode: Location,
    treeNode: Location
) => {
    const x = parentTreeNode.left;
    const y = parentTreeNode.top - getDistance(treeNode, parentTreeNode);

    return (
        (2 * Math.atan2(treeNode.top - y, treeNode.left - x) * 180) / Math.PI -
        180
    );
};

export const getDistance = (location1: Location, location2: Location) => {
    return Math.sqrt(
        Math.abs(location1.left - location2.left) *
            Math.abs(location1.left - location2.left) +
            Math.abs(location1.top - location2.top) *
                Math.abs(location1.top - location2.top)
    );
};

export const getTreeNodeColor = (treeNodeStatus: TreeNodeStatus): string => {
    switch (treeNodeStatus) {
        case TreeNodeStatus.Unvisited:
            return "white";
        case TreeNodeStatus.InProgress:
            return "grey";
        case TreeNodeStatus.Visited:
            return "black";
        case TreeNodeStatus.Current:
            return "green";
        case TreeNodeStatus.Disabled:
            return "white";
    }
};
