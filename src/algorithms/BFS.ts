import {
    TreeNodeProps,
    TreeNodeStatus,
} from "../components/Tree/TreeNode/TreeNode";
import { CustomAlgorithm } from "./CustomAlgorithm";

export class BFS extends CustomAlgorithm {
    setPreviousTreeNodeState = (state: TreeNodeProps): boolean => {
        const queue: TreeNodeProps[] = [];
        let previousTreeNode: TreeNodeProps | undefined = undefined;
        queue.push(state);
        while (queue.length > 0) {
            const currentTreeNode = queue[0];
            queue.shift();

            if (currentTreeNode.status === TreeNodeStatus.Current) {
                currentTreeNode.status = TreeNodeStatus.Unvisited;
                if (previousTreeNode) {
                    previousTreeNode.status = TreeNodeStatus.Current;
                    return false;
                } else {
                    return true;
                }
            }
            if (
                currentTreeNode.leftTreeNode &&
                currentTreeNode.leftTreeNode.status !== TreeNodeStatus.Disabled
            ) {
                queue.push(currentTreeNode.leftTreeNode);
            }
            if (
                currentTreeNode.rightTreeNode &&
                currentTreeNode.rightTreeNode.status !== TreeNodeStatus.Disabled
            ) {
                queue.push(currentTreeNode.rightTreeNode);
            }

            previousTreeNode = currentTreeNode;
        }
        if (previousTreeNode) {
            previousTreeNode.status = TreeNodeStatus.Current;
        }
        return false;
    };

    setNextTreeNodeState = (state: TreeNodeProps): boolean => {
        const queue: TreeNodeProps[] = [];
        if (state.status === TreeNodeStatus.Unvisited) {
            state.status = TreeNodeStatus.Current;
            return false;
        }

        queue.push(state);
        while (queue.length > 0) {
            const currentTreeNode = queue[0];
            queue.shift();

            if (
                currentTreeNode.leftTreeNode &&
                currentTreeNode.leftTreeNode.status !== TreeNodeStatus.Disabled
            ) {
                queue.push(currentTreeNode.leftTreeNode);
            }
            if (
                currentTreeNode.rightTreeNode &&
                currentTreeNode.rightTreeNode.status !== TreeNodeStatus.Disabled
            ) {
                queue.push(currentTreeNode.rightTreeNode);
            }

            if (currentTreeNode.status === TreeNodeStatus.Current) {
                currentTreeNode.status = TreeNodeStatus.Visited;
                if (queue.length === 0) {
                    return true;
                }
                queue[0].status = TreeNodeStatus.Current;
                return false;
            }
        }
        return false;
    };
}
