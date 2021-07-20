import { ACTION_TYPES } from "../actions/Characters";

const initialState = {
    Characters: [],
    Character: {}
   
}


export const Characters = (state = initialState, action) => {

    

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_Characters:
            return {
                ...state,
                
                info: action.payload.info,
                Characters: [...action.payload.results]
            }
            case ACTION_TYPES.FETCH_ALL_CharactersbyPage:
            return {
                ...state,
                info: action.payload.info,
                Characters: [...action.payload.results]

            }
            case ACTION_TYPES.FETCH_CharactersById:
                return {
                    ...state,
                    Character:action.payload,
                    
                }

       
            
        default:
            return state
    }
}