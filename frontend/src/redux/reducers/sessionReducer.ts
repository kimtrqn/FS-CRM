import ActionTypes from '../actions/types';
import { SessionActions, IUserState } from '../interface/session';


const initialState: IUserState = {
    isAuthenticated: null,
    user: {}
};

const sessionReducer = (state=initialState, action: SessionActions): IUserState => {
    Object.freeze(state);
    switch(action.type) {
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                user: action.payload.id,
            }

        default:
            return state;
    }
    
    
};

export default sessionReducer;

