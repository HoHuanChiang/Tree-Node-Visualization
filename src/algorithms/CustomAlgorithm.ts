import { TreeNodeProps } from "../components/Tree/TreeNode/TreeNode";

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

    reset = () => {
        this.isFirstStep = true;
        this.isLastStep = false;
    };

    abstract setPreviousTreeNodeState(state: TreeNodeProps): boolean;
    abstract setNextTreeNodeState(state: TreeNodeProps): boolean;
}
