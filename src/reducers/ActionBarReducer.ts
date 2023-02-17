import React from "react";
import { Algorithm } from "../components/Board/Board";

export interface ActionBarState {
    isStart: boolean; // start or pause
    prevClick: number;
    nextClick: number;
    depth: number;
    algorithm: Algorithm;
    hidePrevButton: boolean;
    hideNextButton: boolean;
    autoRun: boolean;
    resetClick: number;
    stopClick: number;
    animationSpeed: number;
    showInstruction: boolean;
}

export const initialActionBarState: ActionBarState = {
    isStart: false,
    prevClick: 0,
    nextClick: 0,
    depth: 4,
    algorithm: Algorithm.DFS_INORDER,
    hidePrevButton: true,
    hideNextButton: false,
    autoRun: true,
    resetClick: 0,
    stopClick: 0,
    animationSpeed: 100,
    showInstruction: true,
};

export enum ActionBarActionType {
    START_CLICK = 0,
    PREV_CLICK = 1,
    NEXT_CLICK = 2,
    SET_DEPTH = 3,
    HIDE_PREV_BUTTON = 4,
    HIDE_NEXT_BUTTON = 5,
    RESET_CLICK = 6,
    UPDATE_ALGORITHM = 7,
    TOGGLE_AUTO_RUN = 8,
    STOP_CLICK = 9,
    SET_ANIMATION_SPEED = 10,
    SHOW_INSTRUCTION = 11,
}

export type ActionBarPayload =
    | { action: ActionBarActionType.START_CLICK }
    | { action: ActionBarActionType.PREV_CLICK }
    | { action: ActionBarActionType.NEXT_CLICK }
    | { action: ActionBarActionType.SET_DEPTH; depth: number }
    | { action: ActionBarActionType.HIDE_PREV_BUTTON; isHidden: boolean }
    | { action: ActionBarActionType.HIDE_NEXT_BUTTON; isHidden: boolean }
    | { action: ActionBarActionType.RESET_CLICK }
    | { action: ActionBarActionType.UPDATE_ALGORITHM; algorithm: Algorithm }
    | { action: ActionBarActionType.TOGGLE_AUTO_RUN }
    | { action: ActionBarActionType.STOP_CLICK }
    | { action: ActionBarActionType.SET_ANIMATION_SPEED; speed: number }
    | { action: ActionBarActionType.SHOW_INSTRUCTION; visible: boolean };

export const ActionBarReducer = (
    state: ActionBarState,
    payload: ActionBarPayload
): ActionBarState => {
    switch (payload.action) {
        case ActionBarActionType.START_CLICK:
            return {
                ...state,
                isStart: !state.isStart,
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
        case ActionBarActionType.STOP_CLICK:
            return {
                ...state,
                stopClick: state.stopClick + 1,
                isStart: false,
                hidePrevButton: true,
                hideNextButton: false,
            };
        case ActionBarActionType.RESET_CLICK:
            return {
                ...state,
                resetClick: state.resetClick + 1,
                isStart: false,
                hidePrevButton: true,
                hideNextButton: false,
            };
        case ActionBarActionType.UPDATE_ALGORITHM:
            return {
                ...state,
                algorithm: payload.algorithm,
            };
        case ActionBarActionType.TOGGLE_AUTO_RUN:
            return {
                ...state,
                autoRun: !state.autoRun,
            };
        case ActionBarActionType.SET_ANIMATION_SPEED:
            return {
                ...state,
                animationSpeed: payload.speed,
            };
        case ActionBarActionType.SHOW_INSTRUCTION:
            return {
                ...state,
                showInstruction: payload.visible,
            };
        default:
            return state;
    }
};

export const ActionBarContext = React.createContext<
    [ActionBarState, React.Dispatch<ActionBarPayload>]
>([initialActionBarState, () => {}]);
