import axios from "axios";  


const baseAPI = axios.create({
    baseURL: "https://retoolapi.dev",
    headers: {
        "Content-Type": "application/json",
    },
})


export default baseAPI;