import api from "./RickMortyApi"

export const ACTION_TYPES = {

    FETCH_ALL_Characters: 'FETCH_ALL_Characters',
    FETCH_CharactersById: 'FETCH_CharactersById',
    FETCH_ALL_CharactersbyPage: 'FETCH_ALL_CharactersbyPage',
    FETCH_CharactersByIds: 'FETCH_CharactersByIds'
}




export const fetchAll = () => dispatch => {
    api.Characters().fetchAllCharacters()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_Characters,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchAllbyPage = () => dispatch => {
    api.Characters().fetchAllCharactersNextPage()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_CharactersbyPage,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchbyId = (id) => dispatch => {
    
    api.Characters().fetchByIdCharacters(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_CharactersById,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchbyIds = (id) => dispatch => {
    console.log(id)
    api.Characters().fetchByIdCharacters(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_CharactersByIds,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}