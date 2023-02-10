import React from "react";
import Arrow from "./Arrow/Arrow";
import * as Styled from "./TreeNode.styles";
import { getDistance, getRotateDegree } from "./TreeNode.util";
import { Location } from "../Tree.util";

export interface TreeNodeProps {
    radius: number;
    location: Location;
    leftTreeNode?: TreeNodeProps;
    rightTreeNode?: TreeNodeProps;
    isRoot: boolean;
}

const TreeNode = (props: TreeNodeProps) => {
    const { radius, location, leftTreeNode, rightTreeNode, isRoot } = props;

    const styleProps: React.CSSProperties = {
        width: radius * 2,
        height: radius * 2,
        top: location.top,
        left: location.left,
    };

    const parentTreeNodeCenter: Location = {
        top: radius,
        left: radius,
    };
    const currentTreeNodeCenter: Location = {
        top: location.top + radius,
        left: location.left + radius,
    };
    const rotateDegree = getRotateDegree(
        parentTreeNodeCenter,
        currentTreeNodeCenter
    );
    const startLocation: Location = {
        top:
            parentTreeNodeCenter.top +
            Math.cos((Math.PI / 180) * rotateDegree) * radius,
        left:
            parentTreeNodeCenter.left -
            Math.sin((Math.PI / 180) * rotateDegree) * radius,
    };
    const arrowLength =
        getDistance(parentTreeNodeCenter, currentTreeNodeCenter) - radius * 2;

    return (
        <>
            {!isRoot && (
                <Arrow
                    startLocation={startLocation}
                    length={arrowLength}
                    rotateDegree={rotateDegree}
                />
            )}
            <Styled.TreeNodeContainer style={styleProps}>
                {leftTreeNode && <TreeNode {...leftTreeNode} />}
                {rightTreeNode && <TreeNode {...rightTreeNode} />}
            </Styled.TreeNodeContainer>
        </>
    );
};

export default TreeNode;
