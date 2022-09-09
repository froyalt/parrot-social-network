import axios from "axios";  


const testeAPI = axios.create({
    baseURL: "https://retoolapi.dev",
    headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "X-Requested-With"
    },
})


export default testeAPI;