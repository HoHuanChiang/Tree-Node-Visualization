import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ContentContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    overflow: hidden;
`;

export const TitleContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > div {
        color: #4c5b5c;
        font-size: 30px;
        background-color: #f1f0cc;
        height: 80%;
        display: flex;
        align-items: center;
        padding: 0 30px;
        border-radius: 10px;
        z-index: 2;
    }
`;
