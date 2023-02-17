import styled from "styled-components";
import { CardItemProps } from "./AlgorithmCards";

export const AlgorithmnOptionContains = styled.div`
    position: relative;
    height: 150px;
    width: 100%;
`;

export const AlgorithmCard = styled.div.attrs(
    (props: { cardItemProps: CardItemProps }) => props
)`
    height: 50px;
    width: 100%;
    background-color: ${(props) => props.cardItemProps.backgroundColor};
    display: flex;
    align-items: center;
    padding-left: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
        rotate(${(props) => props.cardItemProps.hoverRotateDegree}deg);
    border-radius: 10px;
    box-sizing: border-box;
    transform-origin: 230px 25px;
    cursor: pointer;
    transition: 0.2s ease-in all;
    z-index: ${(props) => props.cardItemProps.zIndex};
    border: 3px solid var(--settings-border-color);
    // box-shadow: 10px 5px 5px ${(props) =>
        props.cardItemProps.backgroundColor};

    &::before {
        content: "";
        background-color: var(--algorithm-card-hole-color);
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 1px solid var(--settings-border-color);
    }
`;
