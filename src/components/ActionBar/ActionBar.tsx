import React from "react";
import * as Styled from "./ActionBar.styles";
import "./ActionBar.styles";
import Slider from "react-input-slider";

interface ActionBarProps {
    minDepth: number;
    maxDepth: number;
    depth: number;
    onDepthChange: (depth: number) => void;
}

const ActionBar = (props: ActionBarProps) => {
    const { minDepth, maxDepth, depth, onDepthChange } = props;

    const onSlideChange = (values: { x: number; y: number }) => {
        onDepthChange(values.x);
    };
    return (
        <Styled.ActionBarContainer>
            <div>
                <label>Depth:{depth}</label>
                <div>
                    <Slider
                        axis="x"
                        xmin={minDepth}
                        xmax={maxDepth}
                        x={depth}
                        xstep={1}
                        onChange={onSlideChange}
                    />
                </div>
                <div></div>
            </div>
        </Styled.ActionBarContainer>
    );
};

export default ActionBar;
