import React from "react";
import { CustomAlgorithm } from "../../algorithms/CustomAlgorithm";
import { ActionBarState } from "../../reducers/ActionBarReducer";
import {
    getDefaultTree,
    getAlgorithm,
    updateTreeNodeDisablity,
} from "./Tree.util";
import TreeNode, { TreeNodeProps, TreeNodeStatus } from "./TreeNode/TreeNode";

interface TreeProps {
    width: number;
    height: number;
    actionBarState: ActionBarState;
    autoRun: boolean;
    onHideNextButton: (hideButton: boolean) => void;
    onHidePrevButton: (hideButton: boolean) => void;
    onResetTree: () => void;
}

const Tree = (props: TreeProps) => {
    const {
        width,
        height,
        actionBarState,
        onHideNextButton,
        onHidePrevButton,
        onResetTree,
    } = props;
    const {
        depth,
        algorithm,
        isStart,
        nextClick,
        prevClick,
        resetClick,
        hidePrevButton,
        hideNextButton,
        autoRun,
        stopClick,
        animationSpeed,
    } = actionBarState;
    const [root, setRoot] = React.useState<TreeNodeProps>();
    const [currentAlgorithm, setCurrentAlgorithm] =
        React.useState<CustomAlgorithm>(getAlgorithm(algorithm));

    const setNextState = () => {
        if (!root) {
            return;
        }
        if (!currentAlgorithm.isLastStep) {
            const nextState = { ...root };
            currentAlgorithm.setNextState(nextState);
            updateActionBarButton();
            setRoot(nextState);
        }
    };

    const setPreviousState = () => {
        if (!root) {
            return;
        }
        if (!currentAlgorithm.isFirstStep) {
            const prevState = { ...root };
            currentAlgorithm.setPrevState(prevState);
            updateActionBarButton();
            setRoot(prevState);
        }
    };

    React.useEffect(() => {
        let timer: NodeJS.Timer | undefined = undefined;
        if (!isStart && !root) {
            const newRoot = getDefaultTree(depth, width, height);
            setRoot(newRoot);
        }
        if (isStart && autoRun) {
            timer = setTimeout(setNextState, animationSpeed);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isStart, depth, root, autoRun, animationSpeed]);

    React.useEffect(() => {
        if (isStart) {
            return;
        }
        const newRoot = getDefaultTree(depth, width, height);
        setRoot(newRoot);
    }, [depth]);

    React.useEffect(() => {
        const newAlgorithm = getAlgorithm(algorithm);
        setCurrentAlgorithm(newAlgorithm);
    }, [algorithm]);

    React.useEffect(() => {
        setNextState();
    }, [nextClick]);

    React.useEffect(() => {
        setPreviousState();
    }, [prevClick]);

    React.useEffect(() => {
        if (!root) {
            return;
        }
        currentAlgorithm.reset();
        setRoot(undefined);
        onResetTree();
    }, [resetClick]);

    React.useEffect(() => {
        if (!root) {
            return;
        }
        const resetRoot = { ...root };
        currentAlgorithm.reset(resetRoot);
        setRoot(resetRoot);
    }, [stopClick]);

    const onTreeNodeClick = (id: number) => {
        if (!root) {
            return;
        }
        const copyRoot = { ...root };
        updateTreeNodeDisablity(id, root);
        setRoot(copyRoot);
    };

    const updateActionBarButton = () => {
        if (currentAlgorithm.isFirstStep && !hidePrevButton) {
            onHidePrevButton(true);
        } else if (hidePrevButton) {
            onHidePrevButton(false);
        }

        if (currentAlgorithm.isLastStep && !hideNextButton) {
            onHideNextButton(true);
        } else if (hideNextButton) {
            onHideNextButton(false);
        }
    };

    return (
        <div>
            {root && <TreeNode {...root} onTreeNodeClick={onTreeNodeClick} />}
        </div>
    );
};

export default Tree;
