import { TreeNodeProps } from "../components/Tree/TreeNode/TreeNode";

export abstract class CustomAlgorithm {
    isFirstStep: boolean;
    isLastStep: boolean;

    constructor() {
        this.isFirstStep = true;
        this.isLastStep = false;
    }

    abstract setPrevState(state: TreeNodeProps): void;
    abstract setNextState(state: TreeNodeProps): void;
}
