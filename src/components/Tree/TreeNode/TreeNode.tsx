import React from "react";
import Arrow from "./Arrow/Arrow";
import * as Styled from "./TreeNode.styles";
import {
    getDistance,
    getRotateDegree,
    getTreeNodeColor,
} from "./TreeNode.util";
import { Location } from "../Tree.util";

export enum TreeNodeStatus {
    Unvisited = 0,
    InProgress = 1,
    Visited = 2,
    Current = 3,
}

export interface TreeNodeProps {
    radius: number;
    location: Location;
    leftTreeNode?: TreeNodeProps;
    rightTreeNode?: TreeNodeProps;
    isRoot: boolean;
    status: TreeNodeStatus;
}

const TreeNode = (props: TreeNodeProps) => {
    const { radius, location, leftTreeNode, rightTreeNode, isRoot, status } =
        props;

    const styleProps: React.CSSProperties = {
        width: radius * 2,
        height: radius * 2,
        top: location.top,
        left: location.left,
        backgroundColor: getTreeNodeColor(status),
    };

    const renderArrow = () => {
        if (isRoot) {
            return;
        }

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
            getDistance(parentTreeNodeCenter, currentTreeNodeCenter) -
            radius * 2;

        return (
            <Arrow
                startLocation={startLocation}
                length={arrowLength}
                rotateDegree={rotateDegree}
            />
        );
    };

    return (
        <>
            {renderArrow()}
            <Styled.TreeNodeContainer style={styleProps}>
                {leftTreeNode && <TreeNode {...leftTreeNode} />}
                {rightTreeNode && <TreeNode {...rightTreeNode} />}
            </Styled.TreeNodeContainer>
        </>
    );
};

export default TreeNode;
