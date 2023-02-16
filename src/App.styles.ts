import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    ::before,
    ::after {
        content: "";
        display: block;
        min-height: 30px;
        bottom: 0;
        left: 0;
        width: 50%;
        background-color: #4c5b5c;
    }
    ::after {
        animation: calc(var(--border-animation-individual-time) * 3)
            border-bottom-extend-left linear;
    }

    ::before {
        position: absolute;
        left: 50%;
        animation: calc(var(--border-animation-individual-time) * 3)
            border-bottom-extend-right linear;
    }

    @keyframes border-bottom-extend-left {
        0% {
            width: 0px;
        }
        66.66% {
            width: 0px;
        }
        100% {
            width: 50%;
        }
    }

    @keyframes border-bottom-extend-right {
        0% {
            left: 100%;
            width: 0px;
        }
        66.66% {
            left: 100%;
            width: 0px;
        }
        100% {
            left: 50%;
            width: 50%;
        }
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    overflow: hidden;

    ::before,
    ::after {
        content: "";
        position: relative;
        width: 30px;
        background-color: #4c5b5c;
        height: 100%;
        animation: calc(var(--border-animation-individual-time) * 2)
            border-left-right-extend-bottom linear;
    }

    @keyframes border-left-right-extend-bottom {
        0% {
            height: 0px;
        }
        50% {
            height: 0px;
        }
        100% {
            height: 100%;
        }
    }
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
        overflow: hidden;

        > span {
            font-family: "Brush Script MT";
            animation: 1s title-slide-up ease;

            @keyframes title-slide-up {
                0% {
                    transform: translateY(100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        }
    }

    ::before,
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        background-color: #4c5b5c;
        height: 100%;
    }

    ::before {
        animation: var(--border-animation-individual-time)
            border-top-extend-left linear;
    }

    ::after {
        left: 50%;
        animation: var(--border-animation-individual-time)
            border-top-extend-right linear;
    }

    @keyframes border-top-extend-left {
        0% {
            left: 50%;
            width: 0;
        }
        100% {
            left: 0;
            width: 50%;
        }
    }

    @keyframes border-top-extend-right {
        0% {
            width: 0;
        }
        100% {
            width: 50%;
        }
    }
`;
