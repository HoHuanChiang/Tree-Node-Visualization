import React from "react";
import * as Styled from "./ActionBar.styles";
import "./ActionBar.styles";
import {
    ActionBarActionType,
    ActionBarContext,
} from "../../reducers/ActionBarReducer";
import { Algorithm } from "../Board/Board";
import AlgorithmCards from "./AlgorithmCards/AlgorithmCards";
import ReactSlider from "react-slider";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./ActionBar.css";

const MIN_DEPTH = 1;
const MAX_DEPTH = 6;

const ActionBar = () => {
    const [actionBarState, dispatch] = React.useContext(ActionBarContext);
    const { isStart, depth, hideNextButton, hidePrevButton, autoRun } =
        actionBarState;
    const isActionBarLocked = isStart || !hidePrevButton;

    const onNextClick = () => {
        dispatch({ action: ActionBarActionType.NEXT_CLICK });
    };
    const onPrevClick = () => {
        dispatch({ action: ActionBarActionType.PREV_CLICK });
    };
    const onStartClick = () => {
        dispatch({ action: ActionBarActionType.START_CLICK });
    };
    const onDepthChange = (value: number) => {
        dispatch({ action: ActionBarActionType.SET_DEPTH, depth: value });
    };
    const onResetClick = () => {
        dispatch({ action: ActionBarActionType.RESET_CLICK });
    };
    const onAlgorithmChange = (algorithm: Algorithm) => {
        dispatch({
            action: ActionBarActionType.UPDATE_ALGORITHM,
            algorithm: algorithm,
        });
    };
    const onAutoRunChange = () => {
        dispatch({
            action: ActionBarActionType.TOGGLE_AUTO_RUN,
        });
    };
    const onStopClick = () => {
        dispatch({
            action: ActionBarActionType.STOP_CLICK,
        });
    };

    const renderActionButtons = () => {
        const startEnabled = !isStart || autoRun;
        const stopEnabled = isStart || (!hideNextButton && autoRun);
        const nextButtonEnabled = isStart && !autoRun && !hideNextButton;
        const prevButtonEnabled = isStart && !autoRun && !hidePrevButton;
        return (
            <Styled.ActionButtonsContainer>
                <Styled.ActionButton
                    disabled={!startEnabled}
                    onClick={onStartClick}
                >
                    {isStart ? "Pause" : "Start"}
                </Styled.ActionButton>
                <Styled.ActionButton
                    disabled={!stopEnabled}
                    onClick={onStopClick}
                >
                    {"Stop"}
                </Styled.ActionButton>
                <Styled.ActionButton onClick={onResetClick}>
                    Reset
                </Styled.ActionButton>
                <Styled.ActionButton
                    disabled={!prevButtonEnabled}
                    onClick={onPrevClick}
                >
                    Previous
                </Styled.ActionButton>
                <Styled.ActionButton
                    disabled={!nextButtonEnabled}
                    onClick={onNextClick}
                >
                    Next
                </Styled.ActionButton>
            </Styled.ActionButtonsContainer>
        );
    };

    const renderAlgorithmOptions = () => {
        return (
            <AlgorithmCards
                onAlgorithmChange={onAlgorithmChange}
                hoverDisabled={isActionBarLocked}
            />
        );
    };

    const renderAnimationSettingsSection = () => {
        const disabled = isStart || !hidePrevButton;
        return (
            <Styled.AnimationSection>
                <div>
                    <label>Depth: {depth}</label>
                    <ReactSlider
                        className={"horizontal-slider"}
                        thumbClassName={"thumb"}
                        trackClassName={"track"}
                        step={1}
                        min={MIN_DEPTH}
                        max={MAX_DEPTH}
                        value={depth}
                        onChange={onDepthChange}
                        disabled={disabled}
                    />
                </div>
                <div>
                    <label>Auto Run:</label>
                    <div>
                        <Toggle
                            defaultChecked={autoRun}
                            onChange={onAutoRunChange}
                            className={"toggle"}
                        />
                    </div>
                </div>
            </Styled.AnimationSection>
        );
    };
    return (
        <Styled.ActionBarContainer isLocked={isActionBarLocked}>
            {renderAlgorithmOptions()}
            {renderAnimationSettingsSection()}
            {renderActionButtons()}
        </Styled.ActionBarContainer>
    );
};

export default ActionBar;
