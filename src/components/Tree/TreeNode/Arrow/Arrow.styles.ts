import styled from "styled-components";

export const ArrowContainer = styled.div.attrs(
    (props: { backgroundColor: string }) => props
)`
    width: 4px;
    border-radius: 10px;
    background-color: ${(props) => props.backgroundColor};
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
        border-left: 4px solid ${(props) => props.backgroundColor};
        border-bottom: 4px solid ${(props) => props.backgroundColor};
        transform: translate(2px, 2px) rotate(-45deg);
        transform-origin: bottom left;
    }

    position: absolute;
`;
