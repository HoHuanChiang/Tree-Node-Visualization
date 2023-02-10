import React from "react";
import { Location } from "../../Tree.util";
import * as Styled from "./Arrow.styles";

interface ArrowProps {
    startLocation: Location;
    length: number;
    rotateDegree: number;
}

const Arrow = (props: ArrowProps) => {
    const { startLocation, length, rotateDegree } = props;

    const arrowStyle: React.CSSProperties = {
        top: startLocation.top,
        left: startLocation.left,
        height: length,
        transform: `rotate(${rotateDegree}deg)`,
    };

    return <Styled.ArrowContainer style={arrowStyle}></Styled.ArrowContainer>;
};

export default Arrow;
