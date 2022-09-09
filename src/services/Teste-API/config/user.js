import baseAPI from ".";

export function listarUser(){
    return baseAPI.get("/user/:id")
}
