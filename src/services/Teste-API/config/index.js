import axios from "axios";  


const baseAPI = axios.create({
    // baseURL: "https://retoolapi.dev",
    baseURL: "https://handson4-parrot.herokuapp.com",
    // withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})


export default baseAPI;