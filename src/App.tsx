import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Board from "./components/Board/Board";

const App = () => {
    const MIN_DEPTH = 1;
    const MAX_DEPTH = 7;
    const [depth, setDepth] = React.useState<number>(4);

    return (
        <div>
            <ActionBar
                minDepth={MIN_DEPTH}
                maxDepth={MAX_DEPTH}
                depth={depth}
                onDepthChange={setDepth}
            />
            <Board width={depth * 140} height={depth * 140} depth={depth} />
        </div>
    );
};

export default App;
