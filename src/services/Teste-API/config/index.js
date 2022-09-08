import axios from "axios";  


const baseAPI = axios.create({
    // baseURL: "https://retoolapi.dev",
    // baseURL: "http://localhost:3033/user/",
    baseURL: "https://handson4-parrot.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
})


export default baseAPI;