import styled from "styled-components";

export const BoardOuterContainer = styled.div`
    height: 100%;
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

export const InstructionButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    border-radius: 50%;
    border: 3px solid var(--instruction-color);
    color: var(--instruction-color);
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    animation: var(--action-bar-total-time) instruction-slide-in ease;

    :hover {
        background-color: var(--instruction-color);
        color: white;
        transform: rotate(360deg);
    }

    @keyframes instruction-slide-in {
        0% {
            transform: translateX(-100px);
        }
        60% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;
