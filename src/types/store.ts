import { Shapepost } from "./Shapepost"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    post: Shapepost []
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostActions {
    "ADD" = "ADD",
    "GET" = "GET",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface AddTripAction {
    action: PostActions.ADD,
    payload: Shapepost
}

export interface GetPostAction {
    action: PostActions.GET,
    payload: Shapepost[]
}

export type Actions = LogInAction | LogOutAction | AddTripAction | GetPostAction;