import api from "./RickMortyApi"

export const ACTION_TYPES = {

    FETCH_ALL_Episodes: 'FETCH_ALL_Episodes',
    FETCH_EpisodesById: 'FETCH_EpisodesById'
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

export const fetchbyId = (id) => dispatch => {
    
    api.Episode().fetchByIdEpisodes(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_EpisodesById,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}