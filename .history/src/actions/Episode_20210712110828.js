import api from "./RickMortyApi"

export const ACTION_TYPES = {

    FETCH_ALL_Episodes: 'FETCH_ALL_Episodes'
}



export const fetchAll = () => dispatch => {
    api.Episode().fetchAllEpisode()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_Episodes,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}