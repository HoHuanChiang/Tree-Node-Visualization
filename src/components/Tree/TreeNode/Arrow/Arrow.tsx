import React from "react";
import { Location } from "../../Tree.util";
import * as Styled from "./Arrow.styles";

interface ArrowProps {
    startLocation: Location;
    length: number;
    rotateDegree: number;
    color: string;
    startAnimation: boolean;
}

const Arrow = (props: ArrowProps) => {
    const { startLocation, length, rotateDegree, color, startAnimation } =
        props;

    const arrowStyle: React.CSSProperties = {
        top: startLocation.top,
        left: startLocation.left,
        height: startAnimation ? length : 0,
        transform: `rotate(${rotateDegree}deg)`,
    };

    return (
        <Styled.ArrowContainer
            style={arrowStyle}
            backgroundColor={color}
            startAnimation={startAnimation}
        ></Styled.ArrowContainer>
    );
};

export default Arrow;
