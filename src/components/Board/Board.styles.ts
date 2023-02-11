import styled from "styled-components";

export const BoardOuterContainer = styled.div`
    height: calc(100vh - 80px);
    position: relative;
`;

export const BoardInnerContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
