import styled from "styled-components";

export const ArrowContainer = styled.div.attrs(
    (props: { backgroundColor: string; startAnimation: boolean }) => props
)`
    width: 2px;
    border-radius: 10px;
    background-color: ${(props) => props.backgroundColor};
    margin-left: -2px;
    margin-top: -2px;
    transform-origin: top;
    transition: height 0.3s, opactiy 0.3s;
    position: absolute;

    &:: before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10px;
        width: 10px;
        border-left: 3px solid ${(props) => props.backgroundColor};
        border-bottom: 3px solid ${(props) => props.backgroundColor};
        transform: translate(1.5px, 1.5px) rotate(-45deg);
        transform-origin: bottom left;
        opacity: ${(props) => (props.startAnimation ? 1 : 0)};
    }
`;
