export const changeCurPage = (page) => {
    return {
        type: "CHANGE_PAGE",
        payload: page,
    }
}

export const authenticate = (username, password) => {
    return function(dispatch){
        //authentication firebase

        //if successful
        dispatch(successfulAuth("visitor"));
        dispatch(changeCurPage("ScoutDashboard"));


    }
}

export const successfulAuth = (role) => {
    return {
        type: "AUTH_SUCCESS",
        role,
        authenticated: true,
    }
}

export const logout = () => {
    return function(dispatch){
        //firebase stuff

        //if successful
        dispatch(logoutSuccess());
        dispatch(changeCurPage("Startup"));
    }
}

export const logoutSuccess = () =>{
    return{
        type: "LOGOUT_SUCCESS",
        authenticated: false,
        role: "",
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

export const clearScout = (scout) => {
    return{
        type: "CLEAR_SCOUT",

    }
}

export const updateTeam = (team) => {
    return{
        type: "UPDATE_TEAM",
        team,
    }
}

export const updateMatch = (match) => {
    return{
        type: "UPDATE_MATCH",
        match,
    }
}

export const updateColor = (color) => {
    return{
        type: "UPDATE_COLOR",
        color,
    }
}

export const updateSide = (side) => {
    return{
        type: "UPDATE_SIDE",
        side,
    }
}

export const submitForm = (scout) => {
    return function(dispatch){
        //storing data firebase
        dispatch(clearScout(scout));
    }
}