import axios from "axios"

export default {
    getStartUpGiphs: () =>{
        console.log("api routing")
        return axios.get("/api/getStartUpGiphs")
    },
    searchGiphs: () =>{
        console.log("api routing")
        return axios.get("/api/searchGiphs")
    }
}