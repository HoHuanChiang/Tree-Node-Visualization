import React from "react";
import Tree from "../Tree/Tree";
import * as Styled from "./Board.styles";

interface BoardProps {
    width: number;
    height: number;
    depth: number;
}

const Board = (props: BoardProps) => {
    const { width, height, depth } = props;

    const styleProps: React.CSSProperties = {
        width: width,
        height: height,
    };

    return (
        <Styled.BoardContainer style={styleProps}>
            <Tree width={width} height={height} depth={depth} />
        </Styled.BoardContainer>
    );
};

export default Board;
