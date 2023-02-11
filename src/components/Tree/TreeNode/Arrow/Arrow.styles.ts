import styled from "styled-components";

export const ArrowContainer = styled.div`
    width: 4px;
    border-radius: 10px;
    background-color: #2b303a;
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
        border-left: 4px solid #2b303a;
        border-bottom: 4px solid #2b303a;
        transform: translate(2px, 2px) rotate(-45deg);
        transform-origin: bottom left;
    }

    position: absolute;
`;
