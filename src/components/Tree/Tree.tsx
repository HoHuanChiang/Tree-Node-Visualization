import React from "react";
import { CustomAlgorithm } from "../../algorithms/CustomAlgorithm";
import { ActionBarState } from "../../reducers/ActionBarReducer";
import { getDefaultTree, getAlgorithm } from "./Tree.util";
import TreeNode, { TreeNodeProps, TreeNodeStatus } from "./TreeNode/TreeNode";

interface TreeProps {
    width: number;
    height: number;
    actionBarState: ActionBarState;
    onHideNextButton: (hideButton: boolean) => void;
    onHidePrevButton: (hideButton: boolean) => void;
}

const Tree = (props: TreeProps) => {
    const {
        width,
        height,
        actionBarState,
        onHideNextButton,
        onHidePrevButton,
    } = props;
    const {
        depth,
        algorithm,
        isStart,
        nextClick,
        prevClick,
        hidePrevButton,
        hideNextButton,
    } = actionBarState;
    const [root, setRoot] = React.useState<TreeNodeProps>();
    const [currentAlgorithm, setCurrentAlgorithm] =
        React.useState<CustomAlgorithm>(getAlgorithm(algorithm));

    React.useEffect(() => {
        if (!isStart || !root) {
            const newRoot = getDefaultTree(depth, width, height);
            setRoot(newRoot);
        }
    }, [isStart, depth]);

    React.useEffect(() => {
        const newAlgorithm = getAlgorithm(algorithm);
        setCurrentAlgorithm(newAlgorithm);
    }, [algorithm]);

    React.useEffect(() => {
        if (!root) {
            return;
        }
        const nextState = { ...root };
        currentAlgorithm.setNextState(nextState);
        updateActionBarButton();
        setRoot(nextState);
    }, [nextClick]);

    React.useEffect(() => {
        if (!root) {
            return;
        }
        const prevState = { ...root };
        currentAlgorithm.setPrevState(prevState);
        updateActionBarButton();
        setRoot(prevState);
    }, [prevClick]);

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

    return <div>{root && <TreeNode {...root} />}</div>;
};

export default Tree;
