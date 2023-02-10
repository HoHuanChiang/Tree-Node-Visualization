import React from "react";
import Board from "./components/Board/Board";

const App = () => {
    return (
        <div>
            <Board width={1024} height={800} depth={4} />
        </div>
    );
};

export default App;
