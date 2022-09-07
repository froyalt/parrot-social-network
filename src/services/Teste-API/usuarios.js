import baseAPI from "./config";

export function cadastroUsuario(payload){
    return baseAPI.post("/GI7aAo/tweet", payload)
}

export function listarUsuario(){
    return baseAPI.get("/GI7aAo/tweet")
}