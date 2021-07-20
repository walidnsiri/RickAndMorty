import { ACTION_TYPES } from "../actions/Episode";

const initialState = {
    list: []
}


export const Episodes = (state = initialState, action) => {

    

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_Episodes:
            return {
                ...state,
                list: [...action.payload.results]
            }

       
            
        default:
            return state
    }
}