import React from "react";
import {
    ActionBarContext,
    ActionBarReducer,
    initialActionBarState,
} from "./reducers/ActionBarReducer";
import Main from "./components/Main/Main";

const App = () => {
    const [state, dispatch] = React.useReducer(
        ActionBarReducer,
        initialActionBarState
    );

    return (
        <div className={"root"}>
            <ActionBarContext.Provider value={[state, dispatch]}>
                <Main />
            </ActionBarContext.Provider>
        </div>
    );
};

export default App;
