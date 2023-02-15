import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Board from "./components/Board/Board";
import {
    ActionBarContext,
    ActionBarReducer,
    initialActionBarState,
} from "./reducers/ActionBarReducer";
import * as Styled from "./App.styles";

const App = () => {
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );

    return (
        <div className={"root"}>
            <ActionBarContext.Provider value={[state, dispatch]}>
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
                </Styled.LayoutContainer>
            </ActionBarContext.Provider>
        </div>
    );
};

export default App;
