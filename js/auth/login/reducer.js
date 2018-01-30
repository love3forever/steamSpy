import { LOGIN_SUCCESS, LOGIN_FAILED } from "./action";
import {AsyncStorage} from 'react-native'

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            const token = action.token
            AsyncStorage.setItem("jwt",token)
            return { 
                ...state,
                jwt:token 
            }

        default:
            return state
    }
};
