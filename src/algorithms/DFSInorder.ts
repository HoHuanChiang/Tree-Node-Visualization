import {
    TreeNodeProps,
    TreeNodeStatus,
} from "../components/Tree/TreeNode/TreeNode";
import { CustomAlgorithm } from "./CustomAlgorithm";

export class DFSInorder extends CustomAlgorithm {
    setPrevState(state: TreeNodeProps): void {
        this.isFirstStep = this.setPreviousTreeNodeState(state);
        this.isLastStep = false;
    }
    setNextState(state: TreeNodeProps): void {
        this.isLastStep = this.setNextTreeNodeState(state);
        this.isFirstStep = false;
    }

    setNextTreeNodeState = (treeNode: TreeNodeProps | undefined): boolean => {
        if (!treeNode) {
            return false;
        }
        if (treeNode.isRoot && treeNode.status === TreeNodeStatus.Unvisited) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }

        if (treeNode.status === TreeNodeStatus.Current) {
            if (
                treeNode.leftTreeNode &&
                treeNode.leftTreeNode.status !== TreeNodeStatus.Visited
            ) {
                treeNode.leftTreeNode.status = TreeNodeStatus.Current;
                treeNode.status = TreeNodeStatus.InProgress;
                return false;
            } else if (
                treeNode.rightTreeNode &&
                treeNode.rightTreeNode.status !== TreeNodeStatus.Visited
            ) {
                treeNode.rightTreeNode.status = TreeNodeStatus.Current;
                treeNode.status = TreeNodeStatus.InProgress;
                return false;
            } else {
                treeNode.status = TreeNodeStatus.Visited;
                return true;
            }
        }

        var leftResponse = this.setNextTreeNodeState(treeNode.leftTreeNode);
        if (leftResponse) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }
        var rightResponse = this.setNextTreeNodeState(treeNode.rightTreeNode);
        if (rightResponse) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }
        return false;
    };

    setPreviousTreeNodeState = (
        treeNode: TreeNodeProps | undefined
    ): boolean => {
        if (!treeNode) {
            return false;
        }

        if (treeNode.isRoot && treeNode.status === TreeNodeStatus.Visited) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }

        if (treeNode.status === TreeNodeStatus.Current) {
            if (
                treeNode.rightTreeNode &&
                treeNode.rightTreeNode.status === TreeNodeStatus.Visited
            ) {
                treeNode.rightTreeNode.status = TreeNodeStatus.Current;
                treeNode.status = TreeNodeStatus.InProgress;
                return false;
            } else if (
                treeNode.leftTreeNode &&
                treeNode.leftTreeNode.status === TreeNodeStatus.Visited
            ) {
                treeNode.leftTreeNode.status = TreeNodeStatus.Current;
                treeNode.status = TreeNodeStatus.InProgress;
                return false;
            } else {
                treeNode.status = TreeNodeStatus.Unvisited;
                return true;
            }
        }

        var leftResponse = this.setPreviousTreeNodeState(treeNode.leftTreeNode);
        if (leftResponse) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }
        var rightResponse = this.setPreviousTreeNodeState(
            treeNode.rightTreeNode
        );
        if (rightResponse) {
            treeNode.status = TreeNodeStatus.Current;
            return false;
        }

        return false;
    };
}
