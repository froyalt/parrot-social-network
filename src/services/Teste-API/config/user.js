import baseAPI from ".";

export function listarUser(){
    return baseAPI.get("/profile")
}
