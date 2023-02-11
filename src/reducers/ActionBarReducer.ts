import React from "react";
import { Algorithm } from "../components/Board/Board";

export interface ActionBarState {
    isStart: boolean;
    prevClick: number;
    nextClick: number;
    depth: number;
    algorithm: Algorithm;
    hidePrevButton: boolean;
    hideNextButton: boolean;
}

export const initialActionBarState: ActionBarState = {
    isStart: false,
    prevClick: 0,
    nextClick: 0,
    depth: 4,
    algorithm: Algorithm.BFS,
    hidePrevButton: false,
    hideNextButton: false,
};

export enum ActionBarActionType {
    START_CLICK = 0,
    PREV_CLICK = 1,
    NEXT_CLICK = 2,
    SET_DEPTH = 3,
    HIDE_PREV_BUTTON = 4,
    HIDE_NEXT_BUTTON = 5,
}

export type ActionBarPayload =
    | { action: ActionBarActionType.START_CLICK }
    | { action: ActionBarActionType.PREV_CLICK }
    | { action: ActionBarActionType.NEXT_CLICK }
    | { action: ActionBarActionType.SET_DEPTH; depth: number }
    | { action: ActionBarActionType.HIDE_PREV_BUTTON; isHidden: boolean }
    | { action: ActionBarActionType.HIDE_NEXT_BUTTON; isHidden: boolean };

export const ActionBarReducer = (
    state: ActionBarState,
    payload: ActionBarPayload
): ActionBarState => {
    switch (payload.action) {
        case ActionBarActionType.START_CLICK:
            return {
                ...state,
                isStart: !state.isStart,
                hideNextButton: false,
                hidePrevButton: true,
            };
        case ActionBarActionType.PREV_CLICK:
            return {
                ...state,
                prevClick: state.prevClick + 1,
            };
        case ActionBarActionType.NEXT_CLICK:
            return {
                ...state,
                nextClick: state.nextClick + 1,
            };
        case ActionBarActionType.SET_DEPTH:
            return {
                ...state,
                depth: payload.depth,
            };
        case ActionBarActionType.HIDE_PREV_BUTTON:
            return {
                ...state,
                hidePrevButton: payload.isHidden,
            };
        case ActionBarActionType.HIDE_NEXT_BUTTON:
            return {
                ...state,
                hideNextButton: payload.isHidden,
            };
        default:
            return state;
    }
};

export const ActionBarContext = React.createContext<
    [ActionBarState, React.Dispatch<ActionBarPayload>]
>([initialActionBarState, () => {}]);
