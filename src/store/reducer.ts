import { Actions, AppState, AuthActions, PostActions,  } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: ""
                }
            }
            
        case PostActions.ADD:
            return {
                ...currentState,
                post: [
                    payload,
                    ...currentState.post,
                ]
            }
        
        case PostActions.GET:
            return {
                ...currentState,
                post: payload
            }

    
        default:
            return currentState;
    }
}