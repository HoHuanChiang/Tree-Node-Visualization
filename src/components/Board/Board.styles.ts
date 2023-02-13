import styled from "styled-components";

export const BoardOuterContainer = styled.div`
    height: 100vh;
    position: relative;
    flex: 1;
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
