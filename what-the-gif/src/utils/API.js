import axios from "axios"

export default {
    getStartUpGiphs: () =>{
        console.log("api routing")
        return axios.get("/api/getStartUpGiphs")
    },
    searchGiphs: (term) =>{
        console.log("api routing searchGiphs " + term)
        return axios.get("/api/searchGiphs",{params:{term}})
    }
}