import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Board from "./components/Board/Board";
import {
    ActionBarContext,
    ActionBarReducer,
    initialActionBarState,
} from "./reducers/ActionBarReducer";

const App = () => {
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );
    return (
        <ActionBarContext.Provider value={[state, dispatch]}>
            <ActionBar />
            <Board />
        </ActionBarContext.Provider>
    );
};

export default App;
