import axios from "axios"

export default {
    getStartUpGiphs: () =>{
        return axios.get("/api/getStartUpGiphs")
    }
}