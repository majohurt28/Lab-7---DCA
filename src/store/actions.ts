import TripsService from '../services/getpost'
import { AddTripAction, AuthActions, GetPostAction, LogInAction, LogOutAction, PostActions  } from "../types/store"


export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getpost = async (): Promise<GetPostAction> => {
    const post = await TripsService.get();
    return {
        action: PostActions .GET,
        payload: post
    }
}

export const addNewTrip = ({payload}: Pick<AddTripAction, "payload">): AddTripAction => {
    return {
        action: PostActions.ADD,
        payload
    }
}
