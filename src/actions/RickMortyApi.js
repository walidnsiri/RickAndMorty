import axios from "axios";
const baseUrl = "https://rickandmortyapi.com/api/"



export default {


//Characters Api

Characters(url = baseUrl + 'character/') {

    return{

            fetchAllCharacters: () => axios.get(url),
            fetchAllCharactersNextPage:()=>axios.get(url),
            fetchByIdCharacters: id => axios.get(url + id)

    }


},



//Episodes Api

Episode(url = baseUrl + 'episode/') {

    return{

    fetchAllEpisode: () => axios.get(url),
    fetchByIdEpisode: id => axios.get(url + id)

    }


}


}