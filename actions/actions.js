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

export const updateValue = (value) => {
    return{
        type: "UPDATE_VALUE",
        payload: {
            value: value,
        }
    }
}