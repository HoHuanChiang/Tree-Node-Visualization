import styled from "styled-components";

export const TreeNodeContainer = styled.div.attrs(
    (props: { borderColor?: string }) => props
)`
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    cursor: pointer;
    transition: opacity 0.3s ease 0.3s, background-color 0.3s;
`;
