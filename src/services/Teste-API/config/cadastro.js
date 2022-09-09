import baseAPI from "."

export function cadastroUsuario(payload){
    // return baseAPI.post("/user", payload)
    return baseAPI.post("/user/", payload)
    // return baseAPI.post("", payload)
    // return baseAPI.post("/GI7aAo/tweet", payload)
}
