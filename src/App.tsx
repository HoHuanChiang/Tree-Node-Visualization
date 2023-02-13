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
`;

const App = () => {
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );
    return (
        <ActionBarContext.Provider value={[state, dispatch]}>
            <LayoutContainer>
                <Board />
                <ActionBar />
            </LayoutContainer>
        </ActionBarContext.Provider>
    );
};

export default App;
