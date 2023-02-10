import styled from "styled-components";

export const ArrowContainer = styled.div`
    width: 8px;
    border-radius: 10px;
    background-color: black;
    margin-left: -4px;
    margin-top: -4px;
    transform-origin: top;

    &:: before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 20px;
        width: 20px;
        border-left: 8px solid black;
        border-bottom: 8px solid black;
        transform: translate(4px, 4px) rotate(-45deg);
        transform-origin: bottom left;
    }

    position: absolute;
`;
