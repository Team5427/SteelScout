export const changeCurPage = (page) => {
    return {
        type: "CHANGE_PAGE",
        payload: page,
    }
}

export const authenticate = (username, password) => {
    return {
        type: "AUTHENTICATE",
        payload: {
            username: username,
            password: password,
        }
    }
}

export const updateValue = (name, number=0) => {
    return{
        type: "UPDATE_VALUE",
        name: name,
        value: number
    }
}

export const updateClimb = (climb) => {
    return{
        type: "UPDATE_CLIMB",
        climb: climb,
    }
}

export const updateDescend = (descend) => {
    return{
        type: "UPDATE_DESCEND",
        descend: descend,
    }
}