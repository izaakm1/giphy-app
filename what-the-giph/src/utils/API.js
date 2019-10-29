import axios from "axios"

export default {
    getStartUpGiphs: () =>{
        return axios.get("/api/getStartUpGiphs")
    },
    searchGiphs: (term) =>{
        return axios.get("/api/searchGiphs",{params:{term}})
    }
}