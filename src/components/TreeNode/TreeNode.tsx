import React from "react";
import * as Styled from "./TreeNode.styles";

export interface Location {
    top: number;
    left: number;
}

export interface TreeNodeProps {
    radius: number;
    location: Location;
    leftTreeNode?: TreeNodeProps;
    rightTreeNode?: TreeNodeProps;
}

const TreeNode = (props: TreeNodeProps) => {
    const { radius, location, leftTreeNode, rightTreeNode } = props;

    const styleProps: React.CSSProperties = {
        width: radius * 2,
        height: radius * 2,
        top: location.top,
        left: location.left,
    };

    return (
        <Styled.TreeNodeContainer style={styleProps}>
            {leftTreeNode && <TreeNode {...leftTreeNode} />}
            {rightTreeNode && <TreeNode {...rightTreeNode} />}
        </Styled.TreeNodeContainer>
    );
};

export default TreeNode;
