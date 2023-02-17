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
    border: 3px solid #35281d;
    color: #35281d;
    transition: background-color 0.3s, color 0.3s;
    animation: var(--action-bar-total-time) instruction-slide-in ease;

    :hover {
        background-color: #35281d;
        color: white;
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
