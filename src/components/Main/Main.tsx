import React from "react";
import ActionBar from "../ActionBar/ActionBar";
import Board from "../Board/Board";
import * as Styled from "./Main.styles";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import {
    ActionBarActionType,
    ActionBarContext,
} from "../../reducers/ActionBarReducer";

const Main = () => {
    const [actionBarState, dispatch] = React.useContext(ActionBarContext);

    const instructionSteps: Step[] = [
        {
            content: "Hover to choose your algorithm",
            target: ".instructionCard",
            placement: "left",
            disableBeacon: true,
        },
        {
            content: "Manage your settings here",
            target: ".settings",
            placement: "left",
            disableBeacon: true,
        },
        {
            content: "Click on a tree node to enable or disable",
            target: ".instructionNode",
            placement: "right",
            disableBeacon: true,
        },
        {
            content: "Press Start and Enjoy!",
            target: ".actionBoard",
            placement: "left",
            disableBeacon: true,
        },
    ];

    const onJoyrideCallback = (data: CallBackProps) => {
        if (data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
            dispatch({
                action: ActionBarActionType.SHOW_INSTRUCTION,
                visible: false,
            });
        }
    };

    return (
        <Styled.LayoutContainer>
            <Styled.TitleContainer>
                <div>
                    <span>Tree Node Visualizer</span>
                </div>
            </Styled.TitleContainer>
            <Styled.ContentContainer>
                <Board />
                <ActionBar />
            </Styled.ContentContainer>
            <Joyride
                continuous={true}
                disableCloseOnEsc={true}
                run={actionBarState.showInstruction}
                hideCloseButton={true}
                showSkipButton={true}
                steps={instructionSteps}
                disableOverlayClose={true}
                callback={onJoyrideCallback}
                styles={{
                    options: {
                        primaryColor: "#35281d",
                    },
                }}
            />
        </Styled.LayoutContainer>
    );
};

export default Main;
