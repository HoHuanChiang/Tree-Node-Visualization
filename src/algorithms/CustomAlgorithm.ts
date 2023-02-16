import {
    TreeNodeProps,
    TreeNodeStatus,
} from "../components/Tree/TreeNode/TreeNode";

export abstract class CustomAlgorithm {
    isFirstStep: boolean;
    isLastStep: boolean;

    constructor() {
        this.isFirstStep = true;
        this.isLastStep = false;
    }

    setPrevState = (state: TreeNodeProps) => {
        this.isFirstStep = this.setPreviousTreeNodeState(state);
        this.isLastStep = false;
    };

    setNextState = (state: TreeNodeProps) => {
        this.isLastStep = this.setNextTreeNodeState(state);
        this.isFirstStep = false;
    };

    reset = (root?: TreeNodeProps) => {
        this.isFirstStep = true;
        this.isLastStep = false;
        this.clearAllState(root);
    };

    clearAllState = (root?: TreeNodeProps) => {
        if (!root || root.status === TreeNodeStatus.Disabled) {
            return;
        }

        root.status = TreeNodeStatus.Unvisited;
        this.clearAllState(root.leftTreeNode);
        this.clearAllState(root.rightTreeNode);
    };

    abstract setPreviousTreeNodeState(state: TreeNodeProps): boolean;
    abstract setNextTreeNodeState(state: TreeNodeProps): boolean;
}
