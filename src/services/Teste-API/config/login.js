import baseAPI from ".";

export function login(payload){

    return baseAPI.post("/auth/login", payload)

}

