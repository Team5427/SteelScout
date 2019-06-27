const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCITyezQMuNHLogJhLJPuPgOR9FSqE1pY8",
    authDomain: "steel-scout.firebaseapp.com",
    databaseURL: "https://steel-scout.firebaseio.com",
    projectId: "steel-scout",
    storageBucket: "steel-scout.appspot.com",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export const changeCurPage = (page) => {
    return {
        type: "CHANGE_PAGE",
        payload: page,
    }
}

export const authenticate = (username, password) => {
    return function(dispatch) {
        firebase.auth().signInWithEmailAndPassword(username, password).then(function() {
            dispatch(successfulAuth("visitor"));
            dispatch(changeCurPage("ScoutDashboard"));
        }).catch(function(error) {
            dispatch(changeCurPage("Startup"));
        });
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
    return function(dispatch) {
        firebase.auth().signOut().then(function() {
            dispatch(logoutSuccess());
            dispatch(changeCurPage("Startup"));
        });
    }
}

export const logoutSuccess = () =>{
    return {
        type: "LOGOUT_SUCCESS",
        authenticated: false,
        role: "",
    }
}

export const updateValue = (name, number=0) => {
    return {
        type: "UPDATE_VALUE",
        name: name,
        value: number
    }
}

export const updateClimb = (climb) => {
    return {
        type: "UPDATE_CLIMB",
        climb: climb,
    }
}

export const updateDescend = (descend) => {
    return {
        type: "UPDATE_DESCEND",
        descend: descend,
    }
}

export const clearScout = (scout) => {
    return {
        type: "CLEAR_SCOUT",
    }
}

export const updateTeam = (team) => {
    return {
        type: "UPDATE_TEAM",
        team,
    }
}

export const updateMatch = (match) => {
    return {
        type: "UPDATE_MATCH",
        match,
    }
}

export const updateColor = (color) => {
    return {
        type: "UPDATE_COLOR",
        color,
    }
}

export const updateSide = (side) => {
    return {
        type: "UPDATE_SIDE",
        side,
    }
}

export const submitForm = (scout) => {
    return function(dispatch) {
        db.collection("teams").doc(scout.team).set({
            team: scout.team,
            match: scout.match,
            color: scout.color,
            side: scout.side,

            rocketCargo1: scout.values.RC1,
            rocketCargo2: scout.values.RC2,
            rocketCargo3: scout.values.RC3,
            rocketHatch1: scout.values.RH1,
            rocketHatch2: scout.values.RH2,
            rocketHatch3: scout.values.RH3,

            level2Descend: scout.descend,
            habClimb: scout.climb,
        });
        dispatch(clearScout(scout));
    }
}
