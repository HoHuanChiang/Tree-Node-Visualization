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

const MIN_DEPTH = 2;
const MAX_DEPTH = 6;
const MIN_SPEED = 50;
const MAX_SPEED = 500;

const ActionBar = () => {
    const [actionBarState, dispatch] = React.useContext(ActionBarContext);
    const {
        isStart,
        depth,
        hideNextButton,
        hidePrevButton,
        autoRun,
        animationSpeed,
    } = actionBarState;
    const [maxDepth, setMaxDepth] = React.useState<number>(MAX_DEPTH);
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

    const onAnimationSpeedChange = (value: number) => {
        dispatch({
            action: ActionBarActionType.SET_ANIMATION_SPEED,
            speed: MAX_SPEED - value + MIN_SPEED,
        });
    };

    React.useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let updateMaxDepth = 4;
            if (windowWidth > 1830) {
                updateMaxDepth = 6;
            } else if (windowWidth > 1550) {
                updateMaxDepth = 5;
            }

            setMaxDepth(updateMaxDepth);

            if (depth > updateMaxDepth) {
                onDepthChange(updateMaxDepth);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [depth]);

    const renderActionButtons = () => {
        const startEnabled = (!isStart || autoRun) && !hideNextButton;
        const stopEnabled = isStart || (autoRun && !hidePrevButton);
        const nextButtonEnabled = isStart && !autoRun && !hideNextButton;
        const prevButtonEnabled = isStart && !autoRun && !hidePrevButton;
        return (
            <Styled.ActionButtonsContainer className={"actionBoard"}>
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
            <Styled.AnimationSection className={"settings"}>
                <div>
                    <label>Depth: {depth}</label>
                    <ReactSlider
                        className={"horizontal-slider"}
                        thumbClassName={"thumb"}
                        trackClassName={"track"}
                        step={1}
                        min={MIN_DEPTH}
                        max={maxDepth}
                        value={depth}
                        onChange={onDepthChange}
                        disabled={disabled}
                    />
                </div>
                <div>
                    <label>Auto Run</label>
                    <div>
                        <Toggle
                            defaultChecked={autoRun}
                            onChange={onAutoRunChange}
                            className={"toggle"}
                            disabled={disabled}
                        />
                    </div>
                </div>
                {autoRun && (
                    <div style={{ marginTop: "15px" }}>
                        <label>Animation Speed</label>
                        <ReactSlider
                            className={"horizontal-slider"}
                            thumbClassName={"thumb"}
                            trackClassName={"track"}
                            min={MIN_SPEED}
                            max={MAX_SPEED}
                            value={MAX_SPEED - animationSpeed + MIN_SPEED}
                            onChange={onAnimationSpeedChange}
                            disabled={disabled}
                        />
                    </div>
                )}
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
