import React from "react";
import * as Styled from "./ActionBar.styles";
import "./ActionBar.styles";
import Slider from "react-input-slider";
import {
    ActionBarActionType,
    ActionBarContext,
} from "../../reducers/ActionBarReducer";

const MIN_DEPTH = 1;
const MAX_DEPTH = 6;

const ActionBar = () => {
    const [actionBarState, dispatch] = React.useContext(ActionBarContext);
    const { isStart, depth, hideNextButton, hidePrevButton, autoRun } =
        actionBarState;

    const onNextClick = () => {
        dispatch({ action: ActionBarActionType.NEXT_CLICK });
    };
    const onPrevClick = () => {
        dispatch({ action: ActionBarActionType.PREV_CLICK });
    };
    const onStartClick = () => {
        dispatch({ action: ActionBarActionType.START_CLICK });
    };
    const onDepthChange = (values: { x: number; y: number }) => {
        dispatch({ action: ActionBarActionType.SET_DEPTH, depth: values.x });
    };

    const onResetClick = () => {
        dispatch({ action: ActionBarActionType.RESET_CLICK });
    };

    return (
        <Styled.ActionBarContainer>
            <div>
                <label>Depth:{depth}</label>
                <div>
                    <Slider
                        axis="x"
                        xmin={MIN_DEPTH}
                        xmax={MAX_DEPTH}
                        x={depth}
                        xstep={1}
                        onChange={onDepthChange}
                    />
                </div>
                <div></div>
            </div>
            <div>
                {!hideNextButton && (
                    <input
                        type="button"
                        value={isStart ? "pause" : "start"}
                        onClick={onStartClick}
                    />
                )}
                <input type="button" value={"reset"} onClick={onResetClick} />
                {isStart && !autoRun && (
                    <>
                        {!hideNextButton && (
                            <input
                                type="button"
                                value="next"
                                onClick={onNextClick}
                            />
                        )}
                        {!hidePrevButton && (
                            <input
                                type="button"
                                value="prev"
                                onClick={onPrevClick}
                            />
                        )}
                    </>
                )}
            </div>
            <div></div>
        </Styled.ActionBarContainer>
    );
};

export default ActionBar;
