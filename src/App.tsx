import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Board from "./components/Board/Board";
import {
    ActionBarContext,
    ActionBarReducer,
    initialActionBarState,
} from "./reducers/ActionBarReducer";
import styled from "styled-components";

const LayoutContainer = styled.div`
    display: flex;
    //border: 40px solid black;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    overflow: hidden;
`;

const App = () => {
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );
    return (
        <div className={"root"}>
            <ActionBarContext.Provider value={[state, dispatch]}>
                <LayoutContainer>
                    <Board />
                    <ActionBar />
                </LayoutContainer>
            </ActionBarContext.Provider>
        </div>
    );
};

export default App;
