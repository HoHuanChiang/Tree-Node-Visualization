import React from "react";
import ActionBar from "../ActionBar/ActionBar";
import Board from "../Board/Board";
import * as Styled from "./Main.styles";

const Main = () => {
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
        </Styled.LayoutContainer>
    );
};

export default Main;
