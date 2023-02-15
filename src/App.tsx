import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Board from "./components/Board/Board";
import {
    ActionBarContext,
    ActionBarReducer,
    initialActionBarState,
} from "./reducers/ActionBarReducer";
import * as Styled from "./App.styles";
import "./App.css";

const App = () => {
    const [animationStart, setAnimationStart] = React.useState<boolean>(false);
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );

    React.useEffect(() => {
        setAnimationStart(true);
    }, []);

    const titleTopBorderClass = animationStart
        ? "titleBarAnimation-end"
        : "titleBarAnimation-start";
    const contentSideBorderClass = animationStart
        ? "contentSideBorderAnimation-end"
        : "contentSideBorderAnimation-start";
    const layoutBottomBorderClass = animationStart
        ? "layoutBottomBorderAnimation-end"
        : "layoutBottomBorderAnimation-start";

    return (
        <div className={"root"}>
            <ActionBarContext.Provider value={[state, dispatch]}>
                <Styled.LayoutContainer className={layoutBottomBorderClass}>
                    <Styled.TitleContainer className={titleTopBorderClass}>
                        <div>Tree Node Visualizer</div>
                    </Styled.TitleContainer>
                    <Styled.ContentContainer className={contentSideBorderClass}>
                        <Board />
                        <ActionBar />
                    </Styled.ContentContainer>
                </Styled.LayoutContainer>
            </ActionBarContext.Provider>
        </div>
    );
};

export default App;
