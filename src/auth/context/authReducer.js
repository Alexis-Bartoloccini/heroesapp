import {types} from "../types/types"

const initialState ={
    logged: false
}

export const authReducer = (state= initialState, action) => {

    switch (action.type){ 
        case types.login:
            return {
// se desestrura el state y solo se modifica lo que se necesita "logged" y "name"
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
                
            };

        default:
            return state

    }
}