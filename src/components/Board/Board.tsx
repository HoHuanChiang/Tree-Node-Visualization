import React from "react";
import {
    ActionBarActionType,
    ActionBarContext,
} from "../../reducers/ActionBarReducer";
import Tree from "../Tree/Tree";
import * as Styled from "./Board.styles";

export enum Algorithm {
    DFS_INORDER = "Depth First Search (Inorder)",
    BFS = "Breadth First Search",
}

const COLUMN_WIDTH = 120;
const ROW_HEIGHT = 120;

const Board = () => {
    const [actionBarState, dispatch] = React.useContext(ActionBarContext);
    const { depth } = actionBarState;
    const styleProps: React.CSSProperties = {
        width: COLUMN_WIDTH * depth * 2,
        height: ROW_HEIGHT * depth,
    };

    const onHideNextButton = (hideButton: boolean) => {
        dispatch({
            action: ActionBarActionType.HIDE_NEXT_BUTTON,
            isHidden: hideButton,
        });
    };
    const onHidePrevButton = (hideButton: boolean) => {
        dispatch({
            action: ActionBarActionType.HIDE_PREV_BUTTON,
            isHidden: hideButton,
        });
    };

    return (
        <Styled.BoardOuterContainer>
            <Styled.BoardInnerContainer style={styleProps}>
                <Tree
                    width={COLUMN_WIDTH * depth}
                    height={ROW_HEIGHT * depth}
                    actionBarState={actionBarState}
                    onHideNextButton={onHideNextButton}
                    onHidePrevButton={onHidePrevButton}
                />
            </Styled.BoardInnerContainer>
        </Styled.BoardOuterContainer>
    );
};

export default Board;
