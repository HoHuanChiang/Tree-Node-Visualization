import React from "react";
import Arrow from "./Arrow/Arrow";
import * as Styled from "./TreeNode.styles";
import {
    getDistance,
    getRotateDegree,
    getTreeNodeColor,
} from "./TreeNode.util";
import { Location } from "../Tree.util";
import { ActionBarContext } from "../../../reducers/ActionBarReducer";

export enum TreeNodeStatus {
    Unvisited = 0,
    InProgress = 1,
    Visited = 2,
    Current = 3,
    Disabled = 4,
}

export interface TreeNodeProps {
    id: number;
    radius: number;
    location: Location;
    leftTreeNode?: TreeNodeProps;
    rightTreeNode?: TreeNodeProps;
    isRoot: boolean;
    status: TreeNodeStatus;
    parentDisabled: boolean;
    onTreeNodeClick?: (id: number) => void;
}

const TreeNode = (props: TreeNodeProps) => {
    const {
        id,
        radius,
        location,
        leftTreeNode,
        rightTreeNode,
        isRoot,
        status,
        parentDisabled,
        onTreeNodeClick,
    } = props;

    const [actionBarState] = React.useContext(ActionBarContext);
    const [startAnimation, setAnimationStart] = React.useState<boolean>(false);
    const nodeRef = React.useRef(null);

    const color = status === TreeNodeStatus.Disabled ? "grey" : "black";
    const styleProps: React.CSSProperties = {
        width: radius * 2,
        height: radius * 2,
        top: location.top,
        left: location.left,
        backgroundColor: getTreeNodeColor(status),
        borderColor: color,
        opacity: startAnimation ? 1 : 0,
    };

    const onAnimationStart = () => {
        setAnimationStart(true);
    };

    React.useEffect(() => {
        setAnimationStart(false);
        let timer: NodeJS.Timer | undefined = setTimeout(
            onAnimationStart,
            id * 100
        );

        return () => {
            clearTimeout(timer);
        };
    }, [actionBarState.depth]);

    const onTreeNodeContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (
            !actionBarState.isStart &&
            actionBarState.hidePrevButton &&
            !parentDisabled
        ) {
            onTreeNodeClick?.(id);
        }
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
                color={color}
                startAnimation={startAnimation}
            />
        );
    };

    if (actionBarState.isStart && status === TreeNodeStatus.Disabled) {
        return <></>;
    }

    return (
        <>
            {renderArrow()}
            <Styled.TreeNodeContainer
                style={styleProps}
                onClick={onTreeNodeContainerClick}
                ref={nodeRef}
            >
                {leftTreeNode && (
                    <TreeNode
                        {...leftTreeNode}
                        onTreeNodeClick={onTreeNodeClick}
                    />
                )}
                {rightTreeNode && (
                    <TreeNode
                        {...rightTreeNode}
                        onTreeNodeClick={onTreeNodeClick}
                    />
                )}
            </Styled.TreeNodeContainer>
        </>
    );
};

export default TreeNode;
